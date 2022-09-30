import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus";
import * as walletService from "../services/walletService";
import { walletDataInput } from "../types/walletTypes";


export async function createRegister(req: Request, res: Response) {
    const registerData : walletDataInput = req.body;
    const user = res.locals.user;
    const balance = await walletService.createRegister(registerData,user.id); 
    res.status(httpStatus.OK).send(balance);
}

export async function getWalletRegister(req: Request, res: Response) {
    const user = res.locals.user;
    const allRegisters = await walletService.getRegister(user.id); 
    res.status(httpStatus.OK).send(allRegisters);
}
