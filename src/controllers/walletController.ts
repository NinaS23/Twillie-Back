import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus";
import * as walletService from "../services/walletService";
import { walletDataInput } from "../types/walletTypes";


export async function createRegister(req: Request, res: Response) {
    const registerData : walletDataInput = req.body;
    const user = res.locals.user;
    const balance = await walletService.createRegister(registerData,user.id); 
    res.status(httpStatus.CREATED).send(balance);
}

export async function getWalletRegister(req: Request, res: Response) {
    const user = res.locals.user;
    const allRegisters = await walletService.getRegister(user.id); 
    res.status(httpStatus.OK).send(allRegisters);
}

export async function deleteWalletRegister(req: Request, res: Response) {
    const id = req.params.id;
    if(!id){
        res.sendStatus(httpStatus.NO_CONTENT)
    }
    console.log(id)
    const walletId: number = Number(id)
    console.log(walletId)
    const user = res.locals.user;
    await walletService.deleteWalletRegister(user.id,walletId); 
 
    res.sendStatus(httpStatus.OK)
}
