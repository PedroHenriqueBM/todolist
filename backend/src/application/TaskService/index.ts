import { taskPrismaRepository } from "../../infraestructure/DatabaseModule/ORM/Prisma/Repository";
import { TaskService } from "./TaskService";

const taskService = new TaskService(taskPrismaRepository);

export { taskService };