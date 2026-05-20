//root/utils/mongodb.ts
/**
 * Datenbank-Connector fuer MongoDB, kapselt Verbindungsaufbau und Wiederverwendung fuer serverseitige Aufrufe.
 * Mongoose connect API, Promise-Caching auf global Scope, Environment-Variable-Guard gegen fehlende Konfiguration.
 * Input MONGODB_URI und Aufruf durch Seiten oder APIs, Logic Connection-Cache und Fehlerbehandlung, Output stabile DB-Connection.
 * Next.js Besonderheit Hot-Reload-sicheres Caching verhindert multiple Verbindungen in Dev bei Pages Router und App Router.
 */

import mongoose from "mongoose";
type MongooseCache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};
declare global {
    var mongooseCache: MongooseCache | undefined;
}
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    console.error("[v16][mongodb] missing MONGODB_URI");
    throw new Error("Missing MONGODB_URI");
}
const globalCache = global as typeof globalThis & {
    mongooseCache?: MongooseCache;
};
if (!globalCache.mongooseCache) {
    globalCache.mongooseCache = {conn: null, promise: null};
}
export default async function dbConnect() {
    const cache = globalCache.mongooseCache as MongooseCache;
    if (cache.conn) {
        console.log("[v16][mongodb] reuse existing connection");
        return cache.conn;
    }
    if (!cache.promise) {
        console.log("[v16][mongodb] creating new connection promise");
        cache.promise = mongoose.connect(MONGODB_URI!, {bufferCommands: false});
    }
    try {
        cache.conn = await cache.promise;
        console.log("[v16][mongodb] connection established", cache.conn.connection.name);
        return cache.conn;
    }
    catch (error) {
        cache.promise = null;
        console.error("[v16][mongodb] connection failed", error);
        throw error;
    }
}
