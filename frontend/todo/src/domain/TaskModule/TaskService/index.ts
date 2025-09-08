import { taskPrismaRepository } from "../TaskRepository";
import { TaskService } from "./TaskService";

const taskService = new TaskService(taskPrismaRepository);

export { taskService };