import { ITask } from "../ITask";
import { Task } from "../Task";
import { TaskStrategy } from "../TaskStrategy/TaskStrategy";
import { ITaskFactory, ITaskFactoryProps } from "./ITaskFactory";
import { randomUUID } from 'node:crypto';

export class TaskFactory implements ITaskFactory {

    create(props: ITaskFactoryProps): ITask {
        const task = new Task(new TaskStrategy());

        if (props.id) {
            task.setId(props.id);
        } else {
            task.setId(randomUUID());
        }

        if (props.createdAt) {
            task.setCreatedAt(props.createdAt);
        } else {
            task.setCreatedAt(new Date().toLocaleDateString("pt-BR"));
        }

        if (props.status) {
            task.setStatus(props.status);
        } else {
            task.setStatus("PENDING");
        }

        task
            .setTitle(props.title)
            .setDescription(props.description)
            .setDeadLine(props.deadLine)
            .setUpdatedAt(props.updatedAt);

        return task;
    }

}