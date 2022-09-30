import { Router } from "express";
import { createRegister,getWalletRegister } from "../controllers/walletController";
import { tokenMiddleware } from "../middlewares/tokenMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMIddleware";
import { walletDataInputSchema } from "../schemas/walletSchema";

const walletRoute = Router();

walletRoute.use(tokenMiddleware);
walletRoute.post("/wallet", validateSchemaMiddleware(walletDataInputSchema), createRegister);
walletRoute.get("/wallet", getWalletRegister)
export default walletRoute;