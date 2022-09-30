import { prisma } from "../config/database";
import { walletDataInput } from "../types/walletTypes";

export async function registerData(wallet:walletDataInput) {
    await prisma.wallet.create({data:wallet})
}


export async function getRegister(userId:number) {
  const result =  await prisma.wallet.findMany({ where: {  userId } });
  return result;
}
