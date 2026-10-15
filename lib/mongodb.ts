import mongoose from "mongoose";

/**
 * MongoDB connection helper.
 *
 * Use `connectToDatabase()` from server code only (route handlers, server
 * actions, server components). The connection promise is cached on the global
 * object so Next.js dev-mode hot reloads do not open a new connection on every
 * request.
 */

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global._mongooseCache ?? {
  conn: null,
  promise: null,
};

global._mongooseCache = cached;

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (!MONGODB_URI) {
    throw new Error(
      "Missing MONGODB_URI environment variable. Add it to your .env file."
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    // Allow the next call to retry instead of reusing a rejected promise.
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

export default connectToDatabase;
