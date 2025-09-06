import { optionalStringField } from "../../Core/Type/OptionalStringField";
import { ITask } from "../Task/ITask";

interface IReadTasksProps {
    limit: Number;
    offset: Number;
}

interface IReadOneTaskByTitleProps {
    title: String;
}

interface IReadOneTaskByIdProps {
    id: String;
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

    readTasks(props: IReadTasksProps): Promise<ITask[]>;
    readOneTaskByTitle(props: IReadOneTaskByTitleProps): Promise<ITask | undefined>
    readOneTaskById(props: IReadOneTaskByIdProps): Promise<ITask | undefined>;
    createTask(props: ICreateTaskProps): Promise<void>;
    updateTask(props: IUpdateTaskProps): Promise<void>;
    deleteTask(props: IDeleteTaskProps): Promise<void>;

}

export { ITaskRepository, IReadTasksProps, ICreateTaskProps, IDeleteTaskProps, IUpdateTaskProps }