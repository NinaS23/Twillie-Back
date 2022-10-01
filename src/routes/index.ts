import { Router } from "express";

import walletRoute from "./walletRoute";
import authRouter from "./authRoute";
import balanceRoute from "./balanceRoute";

const router = Router();

router.use(authRouter);
router.use(walletRoute);
router.use(balanceRoute);

export default router;