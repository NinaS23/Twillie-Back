import pkg from "@prisma/client";

const { PrismaClient } = pkg;
export const prisma = new PrismaClient();
console.log(prisma)