import { jest } from "@jest/globals";
import * as walletService from "../../src/services/walletService";
import * as  balanceRepository from "../../src/repositories/balanceRepository"
import { insertBalance } from "../../src/repositories/balanceRepository";
import * as walletRepository from "../../src/repositories/walletRepository";
import * as walletFactory from "./Factory/walletFactory";
import { faker } from "@faker-js/faker";


beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
});



describe('Test POST /wallet', () => {
    it('create register with correct input schema, should return 201', async () => {
        const inputData = walletFactory.createRegister();
        const userId = 1;
        const walletId = 1
        jest
            .spyOn(walletRepository, 'registerData').mockImplementationOnce((): any => {
                return {
                    "userId": userId,
                    "fixedEntry": 1,
                    "variableEntry": 0,
                    "fixedOutput": 0,
                    "variableOutput": 0,
                    "description": "ganhei dinheiro da vó",
                    "balancevalue": 2
                }
            })
        jest
            .spyOn(balanceRepository, 'insertBalance').mockImplementationOnce((): any => {
                return {
                    "userId": userId,
                    "balance": 2,
                    "walletId": walletId
                }
            })
        await walletService.createRegister(inputData, userId);
        expect(walletRepository.registerData).toBeCalled()
        expect(balanceRepository.insertBalance).toBeCalled()

    })

});



describe('Test GET /wallet', () => {
    it('get all registers , should return a array', async () => {
        const inputData = walletFactory.createRegister();
        const userId = 1;
        const walletId = 1
        jest
            .spyOn(walletRepository, 'registerData').mockImplementationOnce((): any => {
                return {
                    "userId": 1,
                    "fixedEntry": 1,
                    "variableEntry": 0,
                    "fixedOutput": 0,
                    "variableOutput": 0,
                    "description": "ganhei dinheiro da vó",
                    "balancevalue": 2
                }
            })
        jest
            .spyOn(balanceRepository, 'insertBalance').mockImplementationOnce((): any => {
                return {
                    "userId": 1,
                    "balance": 2,
                    "walletId": walletId
                }
            })
            jest
            .spyOn(walletRepository, 'getRegister').mockImplementationOnce((): any => {
                return {
                    "userId": 1,
                    "fixedEntry": 1,
                    "variableEntry": 0,
                    "fixedOutput": 0,
                    "variableOutput": 0,
                    "description": "ganhei dinheiro da vó",
                    "balancevalue": 2
                }
            })
            
        await walletService.createRegister(inputData, userId);
        expect(walletRepository.registerData).toBeCalled()
        expect(balanceRepository.insertBalance).toBeCalled()
        
    
        
    })

});

describe('Test DELETE /wallet/:id', () => {
    it.todo('do a login for user with the correct input data , should return 200')
});