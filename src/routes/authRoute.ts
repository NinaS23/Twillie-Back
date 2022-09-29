import { Router } from "express";
import { createUser } from "../controllers/authController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMIddleware";
import { singUpData } from "../schemas/authSchema";

const authRouter = Router();


authRouter.post("/sing-up", validateSchemaMiddleware(singUpData), createUser);

export default authRouter;