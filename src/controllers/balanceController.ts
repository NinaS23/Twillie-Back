import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus";
import * as balanceService from "../services/balanceService";


export async function getBalance(req: Request, res: Response) {
     const user = res.locals.user;
     const userId = user.id;
     const balance = await balanceService.getBalance(userId);
    res.status(httpStatus.OK).send(balance);
}
