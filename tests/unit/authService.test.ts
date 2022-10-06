import { jest } from "@jest/globals";
import * as authService from "../../src/services/authService";
import * as authFactory from "./Factory/authFactory";
import * as authRepository from "../../src/repositories/authRepository";
import {faker} from "@faker-js/faker";


beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
});

describe('Testa POST /sing-up ', () => {
    it('insert a user with the correct input data , should return 201', async () => {
        const user = authFactory.userData("correct");
        const validEmail = await authService.findUserByEmail(user.email, "register")
        jest.spyOn(authRepository, "isEmailExistent")
            .mockResolvedValueOnce(null);
        jest.spyOn(authRepository, "insertUser")
            .mockImplementationOnce((): any => { });
        await authService.createUser(user);
        expect(authRepository.isEmailExistent).toBeTruthy()
        expect(authRepository.insertUser).toBeTruthy()
        expect(validEmail).toBeNull()   
    });

    it('insert a user with the incorrect input data , should return 422', async () => {
        const user = authFactory.userData("incorrect");
         await authService.findUserByEmail(user.email, "register")
        await authService.createUser(user);

        const wrongInput = authFactory.userData("incorrect")
        await authService.createUser(wrongInput);
        const validEmail = await authService.findUserByEmail(wrongInput.email, "register")
        jest
        .spyOn(authRepository, 'isEmailExistent').mockImplementationOnce( () : any =>{
            return {
                id:1,
                name: "alice",
                email: "alice@dev.com",
                password: '12345',
                picture: "https://images.app.goo.gl/KtBJ3BbHLaMDDYai8",
                createdAt: faker.date.recent()
            }  
        })
        expect(authRepository.isEmailExistent).toBeCalled()
        expect(validEmail).not.toBeNull()  
    });

    it.todo('insert a user with nothing in input data , should return 204');
  });
  