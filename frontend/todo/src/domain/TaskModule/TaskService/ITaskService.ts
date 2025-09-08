import { optionalStringField } from "../../Core/Type/OptionalStringField";
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

interface ICreateTaskProps extends IReadOneTaskByTitleProps {
    description: optionalStringField;
    deadLine: optionalStringField;

}

interface IDeleteTaskProps extends IReadOneTaskByIdProps {
}

interface IUpdateTaskProps extends ICreateTaskProps, IReadOneTaskByIdProps {
    status: string;
}



interface ITaskService {

    countTasks(): Promise<number>;
    readTasks(props: IReadTasksProps): Promise<{ task: ITask[]; all: number }>;
    readOneTaskByTitle(props: IReadOneTaskByTitleProps): Promise<ITask>
    readOneTaskById(props: IReadOneTaskByIdProps): Promise<ITask>;
    createTask(props: ICreateTaskProps): Promise<void>;
    updateTask(props: IUpdateTaskProps): Promise<void>;
    deleteTask(props: IDeleteTaskProps): Promise<void>;

}

export { ITaskService, IReadTasksProps, ICreateTaskProps, IDeleteTaskProps, IUpdateTaskProps, IReadOneTaskByIdProps, IReadOneTaskByTitleProps }