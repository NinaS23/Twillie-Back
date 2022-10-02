import { balances } from "@prisma/client";
import * as balanceRepository from "../repositories/balanceRepository";

export async function insertBalance(userId:number,balance:number,walletId:number) {
    const balanceData ={
        userId:userId,
        balance:balance,
        walletId:walletId
    }
    await balanceRepository.insertBalance(balanceData);
}

export async function getBalance(userId:number) {
    const balances = await balanceRepository.getBalances(userId);
    const lastBalance = returnLastBalance(balances);
    console.log(balances)
    return {lastBalance}
}

function returnLastBalance(balances: Array<balances>) {
    let currentBalance = 0;
    if (balances.length !== 0) {
        currentBalance = balances[balances.length - 1].balance
    }
    return currentBalance;
}