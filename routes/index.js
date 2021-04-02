import express from "express";
import adminRouter from "./adminRouter.js";
import resourceRouter from "./resourcesRouter.js"

const router = express.Router();

router.use("/admin", adminRouter);

router.use("/resource", resourceRouter);

export default router;