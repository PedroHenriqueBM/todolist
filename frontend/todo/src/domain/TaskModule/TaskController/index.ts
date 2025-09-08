import { proxy } from "../../Core/Proxy";
import { taskService } from "../TaskService";
import { TaskController } from "./TaskController";
import { taskControllerStrategy } from "./TaskControllerStrategy";


const taskController = new TaskController(taskService, proxy, taskControllerStrategy);

export { taskController }