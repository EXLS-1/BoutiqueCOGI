import { PrismaClient } from "@prisma/client";

/**
 * Singleton Prisma pour éviter les connexions multiples
 * en environnement Next.js
 */
const prismaClientSingleton = () => new PrismaClient();

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}
