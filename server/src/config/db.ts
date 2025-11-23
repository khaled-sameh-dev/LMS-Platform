import "dotenv/config";
import { PrismaClient } from "../generated/prisma";

export const prisma = new PrismaClient();

export async function connectDB() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully.");
  } catch (e) {
    console.error("Database connection failed:", e);
    process.exit(1);
  }
}
