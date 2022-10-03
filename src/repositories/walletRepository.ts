import { prisma } from "../config/database";
import { walletDataInput } from "../types/walletTypes";

export async function registerData(wallet:walletDataInput) {
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