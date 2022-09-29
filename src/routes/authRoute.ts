import { Router } from "express";
import { createUser,loginUser } from "../controllers/authController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMIddleware";
import { singUpData,singInData } from "../schemas/authSchema";

const authRouter = Router();


authRouter.post("/sing-up", validateSchemaMiddleware(singUpData), createUser);
authRouter.post("/sing-in",validateSchemaMiddleware(singInData), loginUser);

export default authRouter;