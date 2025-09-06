import { Router } from "express";
import { taskRouter } from "./routers/task/taskRouter";

const router = Router();

router.use("/", taskRouter);

export default router;
