import { prisma } from "../config/database";
import { userDataSingUp } from "../types/authTypes";

export async function isEmailExistent(email: string) {
  const result =  await prisma.users.findFirst({
        where: { email }
    })
    return result;
}


export async function insertUser(user: userDataSingUp) {
    await prisma.users.create({ data: user })
}