import { ITask } from "../../../../../domain/TaskModule/Task/ITask";
import { TaskFactory } from "../../../../../domain/TaskModule/Task/TaskFactory/TaskFactory";
import { ICreateTaskProps, IDeleteTaskProps, IReadTasksProps, ITaskRepository, IUpdateTaskProps } from "../../../../../domain/TaskModule/TaskRepository/ITaskRepository";
import { IReadOneTaskByIdProps, IReadOneTaskByTitleProps } from "../../../../../domain/TaskModule/TaskService/ITaskService";
import prismaClient from "../Model/prismaClient";


export class TaskPrismaRepository implements ITaskRepository {

    async countTasks(): Promise<number> {
        return await prismaClient.task.count();
    }

    async readTasks(props: IReadTasksProps): Promise<{ task: ITask[]; all: number }> {

        const tasks = (await prismaClient
            .task
            .findMany({ take: props.limit, skip: props.offset }))
            .map((value) => {
                return new TaskFactory().create({
                    id: value.id,
                    createdAt: value.createdAt.toLocaleDateString("pt-BR"),
                    deadLine: value.deadLine?.toLocaleDateString("pt-BR"),
                    description: value.description,
                    status: value.status,
                    title: value.title,
                    updatedAt: value.updatedAt.toLocaleDateString("pt-BR")
                })
            })

        const all = await prismaClient.task.count();

        return {
            task: tasks,
            all: all
        };

    }
    async readOneTaskByTitle(props: IReadOneTaskByTitleProps): Promise<ITask | undefined> {

        let taskExists = await prismaClient.task.findFirst({ where: { title: props.title.toString() } });
        let result = undefined

        if (taskExists) {

            result = new TaskFactory().create({
                id: taskExists.id,
                createdAt: taskExists.createdAt.toLocaleDateString("pt-BR"),
                deadLine: taskExists.deadLine?.toLocaleDateString("pt-BR"),
                description: taskExists.description,
                status: taskExists.status,
                title: taskExists.title,
                updatedAt: taskExists.updatedAt.toLocaleDateString("pt-BR")
            })
        }

        return result;
    }
    async readOneTaskById(props: IReadOneTaskByIdProps): Promise<ITask | undefined> {

        let taskExists = await prismaClient.task.findFirst({ where: { id: props.id.toString() } });
        let result = undefined

        if (taskExists) {

            result = new TaskFactory().create({
                id: taskExists.id,
                createdAt: taskExists.createdAt.toLocaleDateString("pt-BR"),
                deadLine: taskExists.deadLine?.toLocaleDateString("pt-BR"),
                description: taskExists.description,
                status: taskExists.status,
                title: taskExists.title,
                updatedAt: taskExists.updatedAt.toLocaleDateString("pt-BR")
            })
        }

        return result;
    }
    async createTask(props: ICreateTaskProps): Promise<void> {

        await prismaClient.task.create({
            data: {
                title: props.task.getTitle().toString(),
                id: props.task.getId().toString(),
                deadLine: props.task.getDeadLine()?.toString(),
                description: props.task.getDescription()?.toString(),
                createdAt: props.task.getCreatedAt().toString(),
                status: props.task.getStatus().toString() as any,
                updatedAt: props.task.getUpdatedAt()?.toString()
            }
        });

    }
    async updateTask(props: IUpdateTaskProps): Promise<void> {

        await prismaClient.task.update({
            data: {
                title: props.task.getTitle().toString(),
                deadLine: props.task.getDeadLine()?.toString(),
                description: props.task.getDescription()?.toString(),
                status: props.task.getStatus().toString() as any,
                updatedAt: props.task.getUpdatedAt()?.toString()
            },
            where: {
                id: props.task.getId()
            }
        });

    }
    async deleteTask(props: IDeleteTaskProps): Promise<void> {

        await prismaClient.task.delete({ where: { id: props.id.toString() } })

    }



}