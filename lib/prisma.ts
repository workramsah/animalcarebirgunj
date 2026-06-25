import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = global as unknown as {
  prisma?: PrismaClient;
};

if (process.env.NODE_ENV !== "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined. Set it in .env and restart the app.");
}

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter: new PrismaPg(databaseUrl),
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
export default prisma;