import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
}).$extends(withAccelerate());

type CustomPrismaClient = PrismaClient;

const globalForPrisma = globalThis as unknown as {
  prisma: CustomPrismaClient | undefined;
};

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = prisma as unknown as CustomPrismaClient;
}
const db = globalForPrisma.prisma;
export default db;
