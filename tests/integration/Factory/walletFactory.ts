import { prisma } from "../../../src/config/database";
import { insertWalletData } from "../../../src/types/walletTypes";


export function createRegister() {
    return {
        fixedEntry: 1,
        variableEntry: 1,
        fixedOutput: 0,
        variableOutput: 0,
        description: "ganhei dinheiro da vó"
    }
}
