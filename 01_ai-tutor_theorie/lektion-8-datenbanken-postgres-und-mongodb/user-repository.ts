//root/lektion-8-datenbanken-postgres-und-mongodb/user-repository.ts
// @ts-nocheck

import {getMongoDb} from "./mongodb-client";
import {listUsersFromPostgres} from "./postgres-client";

export type UserDto = {
  id: string;
  email: string;
  name: string;
  source: "postgres" | "mongodb";
};

export async function listUsersUnified(): Promise<UserDto[]> {
  // Parallel laden fuer bessere Latenz.
  const [pgUsers, mongoDb] = await Promise.all([listUsersFromPostgres(), getMongoDb()]);

  const mongoUsers = await mongoDb
    .collection("users")
    .find({}, {projection: {email: 1, name: 1}})
    .limit(20)
    .toArray();

  return [
    ...pgUsers.map((u) => ({id: u.id, email: u.email, name: u.name, source: "postgres" as const})),
    ...mongoUsers.map((u: any) => ({id: String(u._id), email: String(u.email), name: String(u.name), source: "mongodb" as const})),
  ];
}
