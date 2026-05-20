//root/utils/mongodb.js
/**
 * Datenbank-Connector fuer MongoDB, kapselt Verbindungsaufbau und Wiederverwendung fuer serverseitige Aufrufe.
 * Mongoose connect API, Promise-Caching auf global Scope, Environment-Variable-Guard gegen fehlende Konfiguration.
 * Input MONGODB_URI und Aufruf durch Seiten oder APIs, Logic Connection-Cache und Fehlerbehandlung, Output stabile DB-Connection.
 * Next.js Besonderheit Hot-Reload-sicheres Caching verhindert multiple Verbindungen in Dev bei Pages Router und App Router.
 */

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {conn: null, promise: null};
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };
        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}

export default dbConnect;
