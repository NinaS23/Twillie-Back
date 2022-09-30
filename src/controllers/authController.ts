import { Request, Response } from "express";
import { userDataSingUp } from "../types/authTypes";
import * as authService from "../services/authService";
import httpStatus from "../utils/httpStatus";


export async function createUser(req: Request, res: Response) {
    const user : userDataSingUp = req.body;
    await authService.createUser(user);
    res.sendStatus(httpStatus.CREATED)
}

export async function loginUser(req: Request, res: Response) {
    const { email, password }: { email: string, password: string } = req.body;
    const token = await authService.loginUser(email, password);
    res.status(httpStatus.OK).send({token});
} 
