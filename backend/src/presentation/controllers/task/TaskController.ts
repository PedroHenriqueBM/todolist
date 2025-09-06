import { NextFunction, Request, Response } from "express";
import { ICreateTaskProps, ITaskService, IUpdateTaskProps } from "../../../domain/TaskModule/TaskService/ITaskService";
import { IProxy } from "../../../domain/Core/Proxy/IProxy";


export class TaskController {


    constructor(
        private taskService: ITaskService,
        private proxy: IProxy,
        private hateoas: Object
    ) { }

    async readAllTasks(req: Request, res: Response) {

        const result = await this.proxy.execute({
            hateoas: this.hateoas,
            name: "readAllTasks",
            operation: async () => {

                const limit = parseInt(req.query.limit as string);
                const offset = parseInt(req.query.offset as string);

                return await this.taskService.readTasks({ limit: limit, offset: offset })


            }
        });

        res.status(result.status).send(result);

    }

    async readTaskById(req: Request, res: Response) {

        const result = await this.proxy.execute({
            hateoas: this.hateoas,
            name: "readTaskById",
            operation: async () => {

                const id = req.params.id
                return await this.taskService.readOneTaskById({ id: id });


            }
        });

        res.status(result.status).send(result);

    }

    async readTaskByTitle(req: Request, res: Response) {

        const result = await this.proxy.execute({
            hateoas: this.hateoas,
            name: "readTaskByTitle",
            operation: async () => {

                const title = req.query.title as string;
                return await this.taskService.readOneTaskByTitle({ title: title });


            }
        });

        res.status(result.status).send(result);

    }

    async createTask(req: Request, res: Response) {

        const result = await this.proxy.execute({
            hateoas: this.hateoas,
            name: "createTask",
            operation: async () => {

                const props: ICreateTaskProps = req.body;
                return await this.taskService.createTask(props);


            }
        });

        res.status(result.status).send(result);

    }

    async updateTask(req: Request, res: Response) {

        const result = await this.proxy.execute({
            hateoas: this.hateoas,
            name: "updateTask",
            operation: async () => {

                const props: Omit<IUpdateTaskProps, "id"> = req.body;
                const id = req.params.id
                return await this.taskService.updateTask({ id: id, ...props });

            }
        });

        res.status(result.status).send(result);

    }

    async deleteTask(req: Request, res: Response) {

        const result = await this.proxy.execute({
            hateoas: this.hateoas,
            name: "deleteTask",
            operation: async () => {

                const id = req.params.id
                return await this.taskService.deleteTask({ id: id });

            }
        });

        res.status(result.status).send(result);

    }




}