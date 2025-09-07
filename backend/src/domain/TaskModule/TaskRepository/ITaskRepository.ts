import { ITask } from "../Task/ITask";

interface IReadTasksProps {
    limit: number;
    offset: number;
}

interface IReadOneTaskByTitleProps {
    title: string;
}

interface IReadOneTaskByIdProps {
    id: string;
}

interface ICreateTaskProps {
    task: ITask
}

interface IDeleteTaskProps extends IReadOneTaskByIdProps {
}

interface IUpdateTaskProps {
    task: ITask
}

interface ITaskRepository {

    countTasks(): Promise<number>;
    readTasks(props: IReadTasksProps): Promise<{ task: ITask[]; all: number }>;
    readOneTaskByTitle(props: IReadOneTaskByTitleProps): Promise<ITask | undefined>
    readOneTaskById(props: IReadOneTaskByIdProps): Promise<ITask | undefined>;
    createTask(props: ICreateTaskProps): Promise<void>;
    updateTask(props: IUpdateTaskProps): Promise<void>;
    deleteTask(props: IDeleteTaskProps): Promise<void>;

}

export { ITaskRepository, IReadTasksProps, ICreateTaskProps, IDeleteTaskProps, IUpdateTaskProps }