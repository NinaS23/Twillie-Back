import { Router } from "express";

import authRouter from "./authRoute";

const router = Router();

router.use(authRouter);

export default router;