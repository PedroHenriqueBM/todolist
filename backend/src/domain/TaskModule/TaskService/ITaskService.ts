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

interface ICreateTaskProps extends IReadOneTaskByTitleProps {
    description: optionalStringField;
    deadLine: optionalStringField;
}

interface IDeleteTaskProps extends IReadOneTaskByIdProps {
}

interface IUpdateTaskProps extends ICreateTaskProps, IReadOneTaskByIdProps {
    status: String;
}



interface ITaskService {

    readTasks(props: IReadTasksProps): Promise<ITask[]>;
    readOneTaskByTitle(props: IReadOneTaskByTitleProps): Promise<ITask>
    readOneTaskById(props: IReadOneTaskByIdProps): Promise<ITask>;
    createTask(props: ICreateTaskProps): Promise<void>;
    updateTask(props: IUpdateTaskProps): Promise<void>;
    deleteTask(props: IDeleteTaskProps): Promise<void>;

}

export { ITaskService, IReadTasksProps, ICreateTaskProps, IDeleteTaskProps, IUpdateTaskProps, IReadOneTaskByIdProps, IReadOneTaskByTitleProps }