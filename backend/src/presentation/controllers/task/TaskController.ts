import { NextFunction, Request, Response } from "express";
import { ICreateTaskProps, ITaskService, IUpdateTaskProps } from "../../../domain/TaskModule/TaskService/ITaskService";
import { IProxy } from "../../../domain/Core/Proxy/IProxy";
import { ITaskControllerStrategy } from "./TaskControllerStrategy/ITaskControllerStrategy";

interface IHateoas {
    [key: string]: {
        method: string;
        url: string;
        query?: Record<string, string>;
        params?: Record<string, string>;
        body?: Record<string, string>;
    }
}

export class TaskController {




    constructor(
        private taskService: ITaskService,
        private proxy: IProxy,
        private hateoas: IHateoas,
        private controllerStrategy: ITaskControllerStrategy
    ) {

    }


    countAllTasks = async (req: Request, res: Response) => {

        const result = await this.proxy.execute({
            hateoas: this.hateoas,
            name: "countAllTasks",
            operation: async () => {

                return await this.taskService.countTasks()

            }
        });

        res.status(result.status).send(result);
    }

    readAllTasks = async (req: Request, res: Response) => {

        const result = await this.proxy.execute({
            hateoas: this.hateoas,
            name: "readAllTasks",
            operation: async () => {

                const limit = parseInt(req.query.limit as string);
                const offset = parseInt(req.query.offset as string);

                this.controllerStrategy.checkReadAllTasks(limit, offset);
                return await this.taskService.readTasks({ limit: limit, offset: (offset - 1) * limit })


            }
        });

        res.status(result.status).send(result);

    }

    readTaskById = async (req: Request, res: Response) => {

        const result = await this.proxy.execute({
            hateoas: this.hateoas,
            name: "readTaskById",
            operation: async () => {


                const id = req.params.id
                this.controllerStrategy.checkReadTaskById(id)
                return await this.taskService.readOneTaskById({ id: id });


            }
        });

        res.status(result.status).send(result);

    }

    readTaskByTitle = async (req: Request, res: Response) => {

        const result = await this.proxy.execute({
            hateoas: this.hateoas,
            name: "readTaskByTitle",
            operation: async () => {

                const title = req.query.title as string;
                this.controllerStrategy.checkReadTaskByTitle(title);
                return await this.taskService.readOneTaskByTitle({ title: title });


            }
        });

        res.status(result.status).send(result);

    }

    createTask = async (req: Request, res: Response) => {

        const result = await this.proxy.execute({
            hateoas: this.hateoas,
            name: "createTask",
            operation: async () => {
                const props: ICreateTaskProps = req.body;
                this.controllerStrategy.checkCreateTask(props.title, props.description, props.deadLine);
                return await this.taskService.createTask(props);


            }
        });

        res.status(result.status).send(result);

    }

    updateTask = async (req: Request, res: Response) => {

        const result = await this.proxy.execute({
            hateoas: this.hateoas,
            name: "updateTask",
            operation: async () => {

                const props: Omit<IUpdateTaskProps, "id"> = req.body;
                const id = req.params.id

                this.controllerStrategy.checkUpdateTask(id, props.title, props.deadLine, props.description, props.status)
                return await this.taskService.updateTask({ id: id, ...props });

            }
        });

        res.status(result.status).send(result);

    }

    deleteTask = async (req: Request, res: Response) => {

        const result = await this.proxy.execute({
            hateoas: this.hateoas,
            name: "deleteTask",
            operation: async () => {

                const id = req.params.id
                this.controllerStrategy.checkDeleteTask(id);
                return await this.taskService.deleteTask({ id: id });

            }
        });

        res.status(result.status).send(result);

    }

}