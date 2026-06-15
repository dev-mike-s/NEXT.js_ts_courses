//root/lektion-8-datenbanken-postgres-und-mongodb/mongodb-client.ts
/*
  MongoDB-Verbindung mit Connection Reuse: Der Client wird beim ersten Aufruf erstellt und danach wiederverwendet.
  Feature-Historie: Connection Reuse ist ein klassisches Backend-Pattern; in Next.js bleibt es wegen Serverless/Route-Handler-Umgebungen besonders wichtig.
*/

import {MongoClient, Db} from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI fehlt");

let client: MongoClient | null = null;

export async function getMongoDb(): Promise<Db> {
  // Singleton-Pattern fuer Reuse der Verbindung.
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }

  return client.db(process.env.MONGODB_DB ?? "appdb");
}

export type MongoUser = {
  _id: string;
  email: string;
  name: string;
};


