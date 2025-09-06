import { Router } from "express";
import { taskRouter } from "./routes/task/taskRouter";
import { docRouter } from "./routes/doc/docRouter";

const router = Router();

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: List all tasks
 *     responses:
 *       200:
 *         description: Task list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   done:
 *                     type: boolean
 */
router.use("/", [taskRouter, docRouter]);


export default router;
