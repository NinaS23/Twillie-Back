import { userDataSingUp } from "../types/authTypes";
import * as errorsTypes from "../utils/errorUtils";
import * as authRepository from "../repositories/authRepository";
import bcrypt from "bcrypt";

export async function createUser(user: userDataSingUp) {
    const SALT = 10;
    await findUserByEmail(user, "register");
    const currentPassword = bcrypt.hashSync(user.password, SALT);
    const newUserData = {...user,password:currentPassword}
    await authRepository.insertUser(newUserData);
}

async function findUserByEmail(user:userDataSingUp, type: string) {
    let isUserExistent = await authRepository.isEmailExistent(user.email);
    if(isUserExistent && type==="register"){
        throw errorsTypes.conflictError("email alredy registered");
    }
    if(!isUserExistent && type === "login"){
        throw errorsTypes.notFoundError("email or password not found")
    }
}

