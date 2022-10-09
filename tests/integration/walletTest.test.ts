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

describe('Test GET /wallet ', () => {
    it('get all registers , should return 200',async () => {
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

        const getRegister = await server
        .get("/wallet")
        .send(walletInput).set("Authorization", `Bearer ${token}`);
        expect(getRegister.statusCode).toBe(200);
        expect(getRegister.body[0].fixedEntry).toEqual(walletInput.fixedEntry)
        expect(getRegister.body[0].variableEntry).toEqual(walletInput.variableEntry)
        expect(getRegister.body[0].fixedOutput).toEqual(walletInput.fixedOutput)
        expect(getRegister.body[0].variableOutput).toEqual(walletInput.variableOutput)
    });
});


describe('Test DELETE /wallet ', () => {
    it('DELETE first  register , should return 200',async () => {
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

        const getRegister = await server
        .get("/wallet")
        .send().set("Authorization", `Bearer ${token}`);
        expect(getRegister.statusCode).toBe(200);
        expect(getRegister.body[0].fixedEntry).toEqual(walletInput.fixedEntry)
        expect(getRegister.body[0].variableEntry).toEqual(walletInput.variableEntry)
        expect(getRegister.body[0].fixedOutput).toEqual(walletInput.fixedOutput)
        expect(getRegister.body[0].variableOutput).toEqual(walletInput.variableOutput)

        const deleteRegister = await server
        .delete("/wallet/1")
        .send().set("Authorization", `Bearer ${token}`);
        expect(deleteRegister.statusCode).toBe(200)
        
        const getNothing = await server
        .get("/wallet")
        .send().set("Authorization", `Bearer ${token}`);
        expect(getNothing.body).toEqual({});
    });
});