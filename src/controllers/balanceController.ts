import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus";
import * as balanceService from "../services/balanceService";


export async function getBalance(req: Request, res: Response) {
     const balance = await balanceService.getBalance();
    res.status(httpStatus.OK).send("sou o controller do saldo");
}
