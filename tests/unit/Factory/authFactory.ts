import {faker} from "@faker-js/faker";
import jwt from "jsonwebtoken";
import { userDataSingUp } from "../../../src/types/authTypes";
import dotenv from 'dotenv';

dotenv.config();

export function userData(type:string){
    if(type === "correct"){
        return<userDataSingUp>{
            name: "alice",
            email: faker.internet.email(),
            password: '12345',
            picture: "https://images.app.goo.gl/KtBJ3BbHLaMDDYai8"
        }
    }else if(type === "incorrect"){
        return<userDataSingUp>{
            name: "alice",
            email: "alice@dev.com",
            password: '12345',
            picture: "https://images.app.goo.gl/KtBJ3BbHLaMDDYai8"
        }
    }else{
        return<userDataSingUp>{
            name: "",
            email: "",
            password: '',
            picture: ""
        }
    }
}


  