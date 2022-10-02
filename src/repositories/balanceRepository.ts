import { prisma } from "../config/database";
import { InsertBalanceData } from "../types/balanceTypes";

export async function insertBalance(balance:InsertBalanceData) {
    await prisma.balances.create({ data: balance })
}

export async function getBalances(userId: number) {
    const result = await prisma.balances.findMany({ where: { userId } })
    return result;
}


export async function deleteBalance(walletId:number,userId:number) {
   await prisma.$executeRaw`
      DELETE FROM balances
      WHERE
      "walletId" = ${walletId}
      AND 
      "userId" = ${userId}
    `;

}
  
