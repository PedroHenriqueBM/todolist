import { Router, Request, Response } from "express";
import { taskRouter } from "./routes/task/taskRouter";
import { docRouter } from "./routes/doc/docRouter";

const router = Router();

router.use("/", [taskRouter, docRouter]);




export default router;
