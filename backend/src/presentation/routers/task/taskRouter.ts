import { Router } from "express";
import { TaskController } from "../../controllers/task/TaskController";
import { proxy } from "../../../domain/Core/Proxy";
import { taskService } from "../../../application/TaskService";


const taskRouter = Router();

const hateoas = {

    readAllTasks: {
        method: "GET",
        query: {
            limit: "int",
            offset: "int"
        },
        url: "tasks?limit=1,offset=10"
    },

    readTaskById: {
        method: "GET",
        params: {
            id: "string uuid"
        },
        url: "task/:id"
    },

    readTaskByTitle: {
        method: "GET",
        query: {
            title: "string"
        },
        url: "task?title=text"
    },

    createTask: {
        method: "POST",
        body: {
            title: "string",
            description: "optional string",
            deadLine: "optional string date"
        },
        url: "task"
    },

    updateTask: {
        method: "PUT",
        body: {
            title: "string",
            description: "optional string",
            deadLine: "optional string date",
            status: "string PENDING or COMPLETED"
        },
        params: {
            id: "int"
        },
        url: "task/:id"
    },

    deleteTask: {
        method: "DELETE",
        params: {
            id: "int"
        },
        url: "task/:id"
    },

}

const taskControler = new TaskController(taskService, proxy, hateoas);

taskRouter.get("tasks", taskControler.readAllTasks);
taskRouter.get("task/:id", taskControler.readTaskById);
taskRouter.get("task", taskControler.readTaskByTitle);
taskRouter.post("task", taskControler.createTask);
taskRouter.put("task/:id", taskControler.updateTask);
taskRouter.delete("task/:id", taskControler.deleteTask);


export { taskRouter };