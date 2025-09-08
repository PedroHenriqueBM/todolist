import { ICreateTaskProps, ITaskService, IUpdateTaskProps } from "../../../domain/TaskModule/TaskService/ITaskService";
import { IProxy } from "../../../domain/Core/Proxy/IProxy";
import { ITaskControllerStrategy } from "./TaskControllerStrategy/ITaskControllerStrategy";



export class TaskController {




    constructor(
        private taskService: ITaskService,
        private proxy: IProxy,
        private controllerStrategy: ITaskControllerStrategy
    ) {

    }


    countAllTasks = async () => {

        const result = await this.proxy.execute({

            name: "countAllTasks",
            operation: async () => {

                return await this.taskService.countTasks()

            }
        });

        return result;
    }

    readAllTasks = async (req: { limit: number, offset: number }) => {

        const result = await this.proxy.execute({

            name: "readAllTasks",
            operation: async () => {

                const limit = req.limit;
                const offset = req.offset;

                this.controllerStrategy.checkReadAllTasks(limit, offset);
                return await this.taskService.readTasks({ limit: limit, offset: offset })


            }
        });

        return result;

    }

    readTaskById = async (req: { id: string }) => {

        const result = await this.proxy.execute({
            name: "readTaskById",
            operation: async () => {


                const id = req.id
                this.controllerStrategy.checkReadTaskById(id)
                return await this.taskService.readOneTaskById({ id: id });


            }
        });

        return result;

    }

    readTaskByTitle = async (req: { title: string }) => {

        const result = await this.proxy.execute({
            name: "readTaskByTitle",
            operation: async () => {

                const title = req.title;
                this.controllerStrategy.checkReadTaskByTitle(title);
                return await this.taskService.readOneTaskByTitle({ title: title });


            }
        });

        return result;

    }

    createTask = async (req: { title: string, description: string, deadLine: string }) => {

        const result = await this.proxy.execute({
            name: "createTask",
            operation: async () => {
                const props: ICreateTaskProps = req;
                this.controllerStrategy.checkCreateTask(props.title, props.description, props.deadLine);
                return await this.taskService.createTask(props);
            }
        });

        return result;

    }

    updateTask = async (req: { id: string, title: string, description: string, deadLine: string, status: string }) => {

        const result = await this.proxy.execute({
            name: "updateTask",
            operation: async () => {

                const props: Omit<IUpdateTaskProps, "id"> = req;
                const id = req.id

                this.controllerStrategy.checkUpdateTask(id, props.title, props.deadLine, props.description, props.status)
                return await this.taskService.updateTask({ id: id, ...props });

            }
        });

        return result;
    }

    deleteTask = async (req: { id: string }) => {

        const result = await this.proxy.execute({
            name: "deleteTask",
            operation: async () => {

                const id = req.id
                this.controllerStrategy.checkDeleteTask(id);
                return await this.taskService.deleteTask({ id: id });

            }
        });

        return result;

    }

}