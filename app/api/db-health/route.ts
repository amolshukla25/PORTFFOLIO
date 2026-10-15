import { NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/mongodb";

/**
 * Health check for the MongoDB connection.
 * GET /api/db-health
 */
export async function GET() {
  try {
    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;

    if (!db) {
      throw new Error("MongoDB connection is not ready");
    }

    await db.admin().ping();
    const collections = await db.listCollections().toArray();

    return NextResponse.json({
      connected: true,
      database: db.databaseName,
      collections: collections.map((collection) => collection.name),
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    return NextResponse.json(
      {
        connected: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
