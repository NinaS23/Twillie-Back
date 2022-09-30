import { Router } from "express";

import walletRoute from "./walletRoute";
import authRouter from "./authRoute";

const router = Router();

router.use(authRouter);
router.use(walletRoute);

export default router;