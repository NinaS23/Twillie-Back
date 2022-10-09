import { prisma } from "../../../src/config/database";

export async function deleteAllData() {
    await prisma.$transaction([
        prisma.$executeRaw`TRUNCATE balances, wallet,users RESTART IDENTITY`,

    ]);
}

export async function disconnectPrisma() {
    await prisma.$disconnect();
}