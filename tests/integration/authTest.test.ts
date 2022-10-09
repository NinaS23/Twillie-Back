import app from "../../src/app/app";
import supertest from "supertest";
import * as scenarioFactory from "./Factory/scenarioFactory";
import * as authFactory from "./Factory/authFactory";


beforeEach(async () => {
    await scenarioFactory.deleteAllData();
});

const server = supertest(app);


describe('Test POST /sing-up ', () => {
    it('nsert a user with the correct input data , should return 201', async () => {
        const userInput = authFactory.dataInput();
        const isUserExistent = await authFactory.isEmailExistent(userInput.email);
        expect(isUserExistent).toBeNull();
        const createUser = await server
            .post("/sing-up")
            .send(userInput);
        const getUserInput = await authFactory.isEmailExistent(userInput.email);
        expect(getUserInput).not.toBeNull();
        expect(createUser.statusCode).toBe(201);

    });
});


afterAll(async () => {
    await scenarioFactory.disconnectPrisma();
});