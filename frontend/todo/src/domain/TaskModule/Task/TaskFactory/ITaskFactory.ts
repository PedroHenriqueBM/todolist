import { optionalStringField } from "../../../Core/Type/OptionalStringField";
import { ITask } from "../ITask";

interface ITaskFactoryProps {
    id: optionalStringField;
    title: string;
    description: optionalStringField;
    deadLine: optionalStringField;
    status: optionalStringField;
    createdAt: optionalStringField;
    updatedAt: optionalStringField;
}

interface ITaskFactory {

    create(props: ITaskFactoryProps): ITask;

}

export { ITaskFactory, ITaskFactoryProps }