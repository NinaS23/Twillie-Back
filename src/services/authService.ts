import { userDataSingUp } from "../types/authTypes";
import * as errorsTypes from "../utils/errorUtils";
import Jwt from "jsonwebtoken";
import * as authRepository from "../repositories/authRepository";
import bcrypt from "bcrypt";

export async function createUser(user: userDataSingUp) {
    const SALT = 10;
    await findUserByEmail(user.email, "register");
    const currentPassword = bcrypt.hashSync(user.password, SALT);
    const newUserData = {...user,password:currentPassword}
    await authRepository.insertUser(newUserData);
}

export async function findUserByEmail(email:string, type:string) {
    let isUserExistent = await authRepository.isEmailExistent(email);
    if(isUserExistent && type==="register")  throw errorsTypes.conflictError("email alredy registered");
    if(!isUserExistent && type === "login") throw errorsTypes.notFoundError("email or password not found")
    return isUserExistent;
}


export async function loginUser(email: string, password: string) {
    const foundUser = await findUserByEmail(email, "login");
    await dcryptPassword(password,foundUser.password )
    const token = await createToken(foundUser.id)
    return {
        token,
        picture:foundUser.picture,
        name:foundUser.name
    };
}


 async function dcryptPassword(password:string, userPassword:string) {
   console.log(password,userPassword)
    const passwordVerify = bcrypt.compareSync(password, userPassword);
    console.log(passwordVerify)
    if(!passwordVerify){
        throw errorsTypes.unauthorizedError("email or password was not found")
    }
    
}

 async function createToken(id:number){
    const userId = id;
    const secretKey = process.env.JWT_SECRET;
    const config = { expiresIn: 60 * 60 * 6 };
    const token = Jwt.sign({ userId }, secretKey, config);
    return token;
}

