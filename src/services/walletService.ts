import * as errorsTypes from "../utils/errorUtils";
import { walletDataInput } from "../types/walletTypes";
import * as walletRepository from "../repositories/walletRepository";
import * as balanceService from "../services/balanceService";
import { deleteBalance } from "../repositories/balanceRepository";
import { findUserById } from "../repositories/authRepository";

export async function createRegister(walletData: walletDataInput, userId: number) {
    isAllInputDataEqualZero(walletData);
    const currentBalance = await balanceService.getBalance(userId);
    let plusEntry = addData(walletData.fixedEntry, walletData.variableEntry);
    let plusOutput = addData(walletData.fixedOutput, walletData.variableOutput);
    let momentBalance = plusEntry - plusOutput;
    let balance = (plusEntry - plusOutput) + currentBalance.lastBalance;
    const walletDataInsert = {
        userId: userId,
        description: walletData.description,
        fixedEntry: walletData.fixedEntry,
        variableEntry: walletData.variableEntry,
        fixedOutput: walletData.fixedOutput,
        variableOutput: walletData.variableOutput,
        balancevalue:momentBalance
    }
  
   const register = await walletRepository.registerData(walletDataInsert);
    await balanceService.insertBalance(userId,balance,register.id);
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
 if(allRegisters[0].userId !== userId) throw errorsTypes.unauthorizedError("not allowed to get registers")
 return allRegisters;
}

export async function deleteWalletRegister(userId: number, walletId: number) {
    const isUserExistent = await findUserById(userId)
    if (!isUserExistent) throw errorsTypes.notFoundError("user was not found for delete")
        
    const findRegisterForDeletion = await walletRepository.getWalletData(walletId);
    if(!findRegisterForDeletion) throw errorsTypes.notFoundError("register was not found to be deleted")
    if(findRegisterForDeletion.userId !== userId) throw errorsTypes.unauthorizedError("not allowed to delete")
    await deleteBalance(findRegisterForDeletion.id, userId);
    await walletRepository.deleteWalletRegister(walletId);
   
}