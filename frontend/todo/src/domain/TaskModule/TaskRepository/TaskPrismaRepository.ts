

import { ITask } from "./../Task/ITask";

import api from "../../../infraestructure/axios";
import { IReadTasksProps, ITaskRepository, ICreateTaskProps, IDeleteTaskProps, IUpdateTaskProps } from "./ITaskRepository";
import { IReadOneTaskByIdProps, IReadOneTaskByTitleProps } from "../TaskService/ITaskService";
import { TaskFactory } from "../Task/TaskFactory/TaskFactory";


export class TaskPrismaRepository implements ITaskRepository {

    async countTasks(): Promise<number> {
        return (await api.get("/tasks/quantity")).data.data;
    }

    async readTasks(props: IReadTasksProps): Promise<{ task: ITask[]; all: number }> {


        const tasks = (await api.get(`/tasks?limit=${props.limit}&offset=${props.offset}`)).data.data
        const all = await this.countTasks();

        return {
            task: tasks,
            all: all
        };

    }
    async readOneTaskByTitle(props: IReadOneTaskByTitleProps): Promise<ITask | undefined> {

        try {
            let taskExists = (await api.get(`/task?title=${props.title}`)).data.data
            let result = undefined

            if (taskExists) {

                result = new TaskFactory().create({
                    id: taskExists.id,
                    createdAt: taskExists.createdAt,
                    deadLine: taskExists.deadLine,
                    description: taskExists.description,
                    status: taskExists.status,
                    title: taskExists.title,
                    updatedAt: taskExists.updatedAt
                });

            }

            return result;
        } catch (err) {
            return undefined;
        }

    }
    async readOneTaskById(props: IReadOneTaskByIdProps): Promise<ITask | undefined> {

        try {
            let taskExists = (await api.get(`/task/${props.id}`)).data.data

            let result = undefined

            if (taskExists) {

                result = new TaskFactory().create({
                    id: taskExists.id,
                    createdAt: taskExists.createdAt,
                    deadLine: taskExists.deadLine,
                    description: taskExists.description,
                    status: taskExists.status,
                    title: taskExists.title,
                    updatedAt: taskExists.updatedAt
                })

            }

            return result;
        } catch (err) {
            return undefined
        }

    }
    async createTask(props: ICreateTaskProps): Promise<void> {

        await api.post("/task", {

            title: props.task.getTitle().toString(),
            deadLine: props.task.getDeadLine() ? new Date(props.task.getDeadLine()).toLocaleDateString("pt-BR") : props.task.getDeadLine(),
            description: props.task.getDescription()?.toString(),


        })


    }
    async updateTask(props: IUpdateTaskProps): Promise<void> {


        (await api.put(`/task/${props.task.getId()}`, {
            title: props.task.getTitle().toString(),
            deadLine: props.task.getDeadLine() ? new Date(props.task.getDeadLine()).toLocaleDateString("pt-BR") : props.task.getDeadLine(),
            description: props.task.getDescription()?.toString(),
            status: props.task.getStatus().toString() as any
        }))


    }
    async deleteTask(props: IDeleteTaskProps): Promise<void> {

        (await api.delete(`/task/${props.id}`))


    }



}
