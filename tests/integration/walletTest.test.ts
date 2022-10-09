import app from "../../src/app/app";
import supertest from "supertest";
import * as scenarioFactory from "./Factory/scenarioFactory";
import * as authFactory from "./Factory/authFactory";
import * as walletFactory from "./Factory/walletFactory";

beforeEach(async () => {
    await scenarioFactory.deleteAllData();
});

const server = supertest(app);


describe('Test POST /wallet ', () => {
    it('insert a user with the correct input data , should return 201',async () => {
        const userInput = authFactory.dataInput();
        const isUserExistent = await authFactory.isEmailExistent(userInput.email);
        expect(isUserExistent).toBeNull();
        const createUser = await server
            .post("/sing-up")
            .send(userInput);
        const getUserInput = await authFactory.isEmailExistent(userInput.email);
        expect(getUserInput).not.toBeNull();
        expect(createUser.statusCode).toBe(201);
       
        const findUserByEmail = await authFactory.isEmailExistent(userInput.email);
        expect(findUserByEmail).not.toBeNull();
        const loginUser = await server
            .post("/sing-in")
            .send({ email: userInput.email, password: userInput.password });
        expect(loginUser.statusCode).toBe(200);
        expect(loginUser.body.token).not.toBeNull();

        const token = loginUser.body.token;
        const walletInput = walletFactory.createRegister()
        const createRegister = await server
        .post("/wallet")
        .send(walletInput).set("Authorization", `Bearer ${token}`);;
        expect(createRegister.statusCode).toBe(201);
    });
});