import { jest } from "@jest/globals";
import * as authService from "../../src/services/authService";
import * as authFactory from "./Factory/authFactory";
import * as authRepository from "../../src/repositories/authRepository";
import { faker } from "@faker-js/faker";


beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
});

describe('Test POST /sing-up ', () => {
    it('insert a user with the correct input data , should return 201', async () => {
        const user = authFactory.userData("correct");
        jest.spyOn(authRepository, "isEmailExistent")
            .mockResolvedValueOnce(null);
        jest.spyOn(authRepository, "insertUser")
            .mockImplementationOnce((): any => { });
        await authService.createUser(user);
        const validEmail = await authService.findUserByEmail(user.email, "register")
        expect(authRepository.isEmailExistent).toBeTruthy()
        expect(authRepository.isEmailExistent).toBeCalled()
        expect(authRepository.insertUser).toBeCalled()
        expect(authRepository.insertUser).toBeTruthy()
        expect(validEmail).toBeNull()
    });

    it('insert a user with the incorrect input data , should return 409', async () => {
        const user = authFactory.userData("incorrect");
        jest.spyOn(authRepository, "isEmailExistent")
            .mockResolvedValueOnce(null);
        jest.spyOn(authRepository, "insertUser")
            .mockImplementationOnce((): any => { });
        await authService.findUserByEmail(user.email, "register")
        await authService.createUser(user);


        const wrongInput = authFactory.userData("incorrect")
        jest
            .spyOn(authRepository, 'isEmailExistent').mockImplementationOnce((): any => {
                return {
                    id: 1,
                    name: "alice",
                    email: "alice@dev.com",
                    password: '12345',
                    picture: "https://images.app.goo.gl/KtBJ3BbHLaMDDYai8",
                    createdAt: faker.date.recent()
                }
            })
        const promise = authService.findUserByEmail(wrongInput.email, "register");
        expect(promise).rejects.toEqual({
            message: 'email alredy registered',
            type: 'conflict'
        });
        expect(authRepository.insertUser).toBeCalledTimes(1)
        expect(authRepository.isEmailExistent).toBeCalled()


    });
});


describe('Test POST /sing-in ', () => {
    it('do a login for user with the correct input data , should return 200', async () => {
        const user = authFactory.userData("incorrect");
        jest.spyOn(authRepository, "isEmailExistent")
            .mockResolvedValueOnce(null);
        jest.spyOn(authRepository, "insertUser")
            .mockImplementationOnce((): any => { });
        await authService.findUserByEmail(user.email, "register")
        await authService.createUser(user);

        const loginInput = authFactory.userData("incorrect")
        jest
            .spyOn(authRepository, 'isEmailExistent').mockImplementationOnce((): any => {
                return {
                    id: 1,
                    name: "alice",
                    email: "alice@dev.com",
                    password: '12345',
                    picture: "https://images.app.goo.gl/KtBJ3BbHLaMDDYai8",
                    createdAt: faker.date.recent()
                }
            })
        const login = await authService.loginUser(loginInput.email, loginInput.password);
        const loginEmail = await authService.findUserByEmail(loginInput.email, "login");
    
        expect(authRepository.isEmailExistent).toBeCalled()
        expect(authRepository.insertUser).toBeCalled()
        expect(login.token).not.toBeNull()
        expect(loginEmail.password).toEqual(loginInput.password)
        expect(loginEmail.email).toEqual(loginInput.email)
    });
});