import {faker} from "@faker-js/faker";
import jwt from "jsonwebtoken";
import { userDataSingUp } from "../../../src/types/authTypes";

export function userData(type:string){
    if(type === "correct"){
        return{
            name: "alice",
            email: faker.internet.email(),
            password: '12345',
            picture: "https://images.app.goo.gl/KtBJ3BbHLaMDDYai8"
        }
    }else if(type === "incorrect"){
        return {
            name: "alice",
            email: "alice@dev.com",
            password: '12345',
            picture: "https://images.app.goo.gl/KtBJ3BbHLaMDDYai8"
        }
    }else{
        return {
            name: "",
            email: "",
            password: '',
            picture: ""
        }
    }
}

export async function token(userId) {
    return jwt.sign({ userId: userId}, process.env.JWT_SECRET);
  }
  