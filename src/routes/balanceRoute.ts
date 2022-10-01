import { Router } from "express";
import { getBalance } from "../controllers/balanceController";
import { tokenMiddleware } from "../middlewares/tokenMiddleware";

const balanceRoute = Router();

balanceRoute.get("/balance", tokenMiddleware,getBalance);

export default balanceRoute;