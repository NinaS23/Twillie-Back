import { prisma } from "../../../src/config/database";
import { insertWalletData } from "../../../src/types/walletTypes";

export async function registerData(wallet:insertWalletData) {
   const result = await prisma.wallet.create({data:wallet})
   return result;
}


export async function getRegister(userId:number) {
  const result =  await prisma.wallet.findMany({ where: {  userId } });
  return result;
}


export async function getWalletData(id:number) {
 const result = await prisma.wallet.findFirst({ where: {  id } });
 return result;
  
}

export async function deleteWalletRegister(id:number) {
  await prisma.wallet.delete({ where: {  id } });
  
}

export function createRegister() {
    return {
        fixedEntry: 1,
        variableEntry: 1,
        fixedOutput: 0,
        variableOutput: 0,
        description: "ganhei dinheiro da vó"
    }
}
