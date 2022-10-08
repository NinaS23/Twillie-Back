import { jest } from "@jest/globals";
import * as walletService from "../../src/services/walletService";
import * as  balanceRepository from "../../src/repositories/balanceRepository";
import * as authRepository from "../../src/repositories/authRepository";
import * as authFactory from "./Factory/authFactory";
import * as authService from "../../src/services/authService";
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
                    userId: 1,
                    fixedEntry: 1,
                    variableEntry: 0,
                    fixedOutput: 0,
                    variableOutput: 0,
                    description: "ganhei dinheiro da vó",
                    balancevalue: 2
                }
            })
        jest
            .spyOn(balanceRepository, 'insertBalance').mockImplementationOnce((): any => {
                return {
                    userId: 1,
                    balance: 2,
                    walletId: walletId
                }
            })
            jest
            .spyOn(walletRepository, 'getRegister').mockImplementationOnce((): any => {
                return {
                    userId: 1,
                    fixedEntry: 1,
                    variableEntry: 0,
                    fixedOutput: 0,
                    variableOutput: 0,
                    description: "ganhei dinheiro da vó",
                    balancevalue: 2
                }
            })
            
        await walletService.createRegister(inputData, userId);
        expect(walletRepository.registerData).toBeCalled()
        expect(balanceRepository.insertBalance).toBeCalled()  
    })

});

describe('Test DELETE /wallet/:id', () => {
    it('do a login for user with the correct input data , should return 200',async () => {
        const inputData = walletFactory.createRegister();
        const userId = 1;
        const walletId = 1
        const user = authFactory.userData("incorrect");
        jest.spyOn(authRepository, "isEmailExistent")
            .mockResolvedValueOnce(null);
        jest.spyOn(authRepository, "insertUser")
            .mockImplementationOnce((): any => { });
        await authService.createUser(user);

        jest
            .spyOn(walletRepository, 'registerData').mockImplementationOnce((): any => {
                return {
                    userId: 1,
                    "fixedEntry": 1,
                    variableEntry: 0,
                    fixedOutput: 0,
                    variableOutput: 0,
                    description: "ganhei dinheiro da vó",
                    balancevalue: 2
                }
            })
        jest
            .spyOn(balanceRepository, 'insertBalance').mockImplementationOnce((): any => {
                return {
                    userId: 1,
                    balance: 2,
                    walletId: walletId
                }
            })
        jest
            .spyOn(walletRepository, 'getRegister')
            .mockImplementationOnce((): any => {
                return {
                    userId: 1,
                    fixedEntry: 1,
                    variableEntry: 0,
                    fixedOutput: 0,
                    variableOutput: 0,
                    description: "ganhei dinheiro da vó",
                    balancevalue: 2
                }
            })

        jest
            .spyOn(authRepository, 'findUserById')
            .mockResolvedValueOnce({ ...user, id: 1, createdAt: faker.date.recent() });

        jest
            .spyOn(walletRepository, 'getWalletData')
            .mockImplementationOnce((): any => {
                return {
                    userId: 1,
                    "fixedEntry": 1,
                    variableEntry: 0,
                    fixedOutput: 0,
                    variableOutput: 0,
                    description: "ganhei dinheiro da vó",
                    balancevalue: 2
                }
            })
        jest
            .spyOn(balanceRepository, "deleteBalance")
            .mockImplementationOnce((): any => { });

        jest
            .spyOn(walletRepository, "deleteWalletRegister")
            .mockImplementationOnce((): any => { });

        await walletService.createRegister(inputData, userId);
        await walletService.deleteWalletRegister(userId,walletId);
       
        expect(walletRepository.deleteWalletRegister).toBeCalled()
        expect(balanceRepository.deleteBalance).toBeCalled()
      

    });
});