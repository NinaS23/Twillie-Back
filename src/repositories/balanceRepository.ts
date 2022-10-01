import { prisma } from "../config/database";
import { InsertBalanceData } from "../types/balanceTypes";

export async function insertBalnce(balance: InsertBalanceData) {
    await prisma.balances.create({data:balance})
}