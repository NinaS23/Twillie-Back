import {faker} from "@faker-js/faker";
import jwt from "jsonwebtoken";
import { prisma } from "../../../src/config/database";
import { userDataSingUp } from "../../../src/types/authTypes";
import dotenv from 'dotenv';

dotenv.config();

export function dataInput(){
  const user = {
    name: "alice",
    email: faker.internet.email(),
    password: '12345',
    picture: "https://images.app.goo.gl/KtBJ3BbHLaMDDYai8"
  }
  return user;
}

export async function isEmailExistent(email: string) {
    const result =  await prisma.users.findFirst({
          where: { email }
      })
      return result;
  }
  
  
  export async function insertUser(user: userDataSingUp) {
      await prisma.users.create({ data: user })
  }
  
  
  export async function findUserById(id: number) {
      const result = await prisma.users.findFirst({
        where: { id }
      })
    return result;
    }
  