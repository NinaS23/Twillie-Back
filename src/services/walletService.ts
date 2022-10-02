import * as errorsTypes from "../utils/errorUtils";
import { walletDataInput } from "../types/walletTypes";
import * as walletRepository from "../repositories/walletRepository";
import { insertBalance, getBalance } from "./balanceService";

export async function createRegister(walletData: walletDataInput, userId: number) {
    isAllInputDataEqualZero(walletData);
    const currentBalance = await getBalance(userId);
    let plusEntry = addData(walletData.fixedEntry, walletData.variableEntry);
    let plusOutput = addData(walletData.fixedOutput, walletData.variableOutput);
    let balance = (plusEntry - plusOutput) + currentBalance.lastBalance;
    const walletDataInsert = {
        userId: userId,
        description: walletData.description,
        fixedEntry: walletData.fixedEntry,
        variableEntry: walletData.variableEntry,
        fixedOutput: walletData.fixedOutput,
        variableOutput: walletData.variableOutput,
        balancevalue:balance
    }
  
   const register = await walletRepository.registerData(walletDataInsert);
    await insertBalance(userId,balance,register.id);
    return { balance: balance };
}

 function addData(fixed: number, variable: number) {
    let plus = fixed + variable;
    return plus;
}

function isAllInputDataEqualZero(wallet:walletDataInput){
    if(wallet.fixedEntry === 0 && wallet.fixedOutput === 0 && wallet.variableEntry === 0 && wallet.variableEntry === 0){
        throw errorsTypes.wrongSchemaError("all input data is equal zero , please try again!");
    }
}

export async function getRegister(userId: number) {
 const allRegisters = await walletRepository.getRegister(userId)
 return allRegisters;
}

