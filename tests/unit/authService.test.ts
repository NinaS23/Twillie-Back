import { jest } from "@jest/globals";
import * as authService from "../../src/services/authService";
import * as authFactory from "./Factory/authFactory";
import * as authRepository from "../../src/repositories/authRepository";


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

    it.todo('insert a user with the incorrect input data , should return 422');

    it.todo('insert a user with nothing in input data , should return 204');
  });
  