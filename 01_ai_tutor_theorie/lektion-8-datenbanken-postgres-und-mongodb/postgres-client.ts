//root/lektion-8-datenbanken-postgres-und-mongodb/postgres-client.ts
/*
  PostgreSQL-Pool: Mehrere Anfragen koennen verwaltete DB-Verbindungen wiederverwenden.
  Feature-Historie: Connection Pooling ist ein altes, bewaehrtes Datenbankpattern und nicht Next-spezifisch, sondern Node.js-Backend-Grundlage.
*/

import {Pool} from "pg";

// Pool = verwaltete Menge an DB-Verbindungen (Connection Pooling).
export const pgPool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  max: 10,
});

export type UserRow = {
  id: string;
  email: string;
  name: string;
  created_at: string;
};

export async function listUsersFromPostgres(): Promise<UserRow[]> {
  const result = await pgPool.query<UserRow>(
    "select id, email, name, created_at from users order by created_at desc limit 20"
  );

  return result.rows;
}


