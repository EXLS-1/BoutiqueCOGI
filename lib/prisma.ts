
import { PrismaClient } from "@prisma/client";

// On déclare une variable globale pour stocker l'instance de Prisma
const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

// On utilise l'instance existante si elle est dans l'objet global, sinon on en crée une
const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

// En développement, on attache l'instance à l'objet global pour la réutiliser
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;