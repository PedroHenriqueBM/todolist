import { TaskAlreadyExists } from "../../domain/Core/Error/ErrorTypes/Task/TaskAlreadyExists/TaskAlreadyExists";
import { TaskDoesNotExist } from "../../domain/Core/Error/ErrorTypes/Task/TaskDoesNotExist/TaskDoesNotExist";
import { ITask } from "../../domain/TaskModule/Task/ITask";
import { TaskFactory } from "../../domain/TaskModule/Task/TaskFactory/TaskFactory";
import { ITaskRepository } from "../../domain/TaskModule/TaskRepository/ITaskRepository";
import { ICreateTaskProps, IDeleteTaskProps, IReadOneTaskByIdProps, IReadOneTaskByTitleProps, IReadTasksProps, ITaskService, IUpdateTaskProps } from "../../domain/TaskModule/TaskService/ITaskService";

export class TaskService implements ITaskService {

    constructor(private taskRepository: ITaskRepository) { }

    async countTasks(): Promise<number> {
        return await this.taskRepository.countTasks();
    }
    async readTasks(props: IReadTasksProps): Promise<{ task: ITask[]; all: number }> {
        return await this.taskRepository.readTasks(props);
    }
    async readOneTaskByTitle(props: IReadOneTaskByTitleProps): Promise<ITask> {
        const task = await this.taskRepository.readOneTaskByTitle(props);

        if (!task) {
            throw new TaskDoesNotExist({ cause: `${props.title} does not exist`, module: "TaskService/readOneTaskByTitle", status: 404 })
        }
        return task;
    }
    async readOneTaskById(props: IReadOneTaskByIdProps): Promise<ITask> {
        const task = await this.taskRepository.readOneTaskById(props);
        if (!task) {
            throw new TaskDoesNotExist({ cause: `${props.id} does not exist`, module: "TaskService/readOneTaskById", status: 404 })
        }
        return task;
    }
    async createTask(props: ICreateTaskProps): Promise<void> {

        const task = new TaskFactory().create({
            id: undefined,
            createdAt: undefined,
            deadLine: props.deadLine,
            description: props.description,
            title: props.title,
            status: undefined,
            updatedAt: undefined
        });

        const taskAlreadyExists = await this.taskRepository.readOneTaskByTitle({ title: task.getTitle() });
        if (taskAlreadyExists) {
            throw new TaskAlreadyExists({ cause: `${props.title} already exists`, module: "TaskService/CreateTask", status: 400 });
        }

        await this.taskRepository.createTask({ task: task });

    }
    async updateTask(props: IUpdateTaskProps): Promise<void> {

        const task = await this.taskRepository.readOneTaskById({ id: props.id });

        if (!task) {
            throw new TaskDoesNotExist({ cause: `${props.id} does not exist`, module: "TaskService/updateTask", status: 404 })
        }

        if (props.status) {
            task.setStatus(props.status)
        }
        if (props.deadLine) {
            task.setDeadLine(props.deadLine)
        }
        if (props.description) {
            task.setDescription(props.description)
        }
        if (props.title) {

            const taskAlreadyExists = await this.taskRepository.readOneTaskByTitle({ title: props.title });

            if (taskAlreadyExists && taskAlreadyExists.getId() !== task.getId()) {
                throw new TaskAlreadyExists({ cause: `${props.title} already exists`, module: "TaskService/updateTask", status: 400 });
            }

            task.setTitle(props.title);

        }

        await this.taskRepository.updateTask({ task: task });

    }
    async deleteTask(props: IDeleteTaskProps): Promise<void> {

        const task = await this.taskRepository.readOneTaskById({ id: props.id });

        if (!task) {
            throw new TaskDoesNotExist({ cause: `${props.id} does not exist`, module: "TaskService/deleteTask", status: 404 })
        }

        await this.taskRepository.deleteTask({ id: props.id });
    }


}