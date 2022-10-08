import { prisma } from "../../../src/config/database";

export async function deleteAllData() {
    await prisma.$transaction([
        prisma.$executeRaw`TRUNCATE TABLE recommendations`,
    ]);
}

export async function disconnectPrisma() {
    await prisma.$disconnect();
}