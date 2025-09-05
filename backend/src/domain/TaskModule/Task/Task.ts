
import { optionalStringField } from "../../Core/Type/OptionalStringField";
import { ITaskStrategy } from "../TaskStrategy/ITaskStrategy";
import { ITask } from "./ITask";

export class Task implements ITask {

    private title: String;
    private description: optionalStringField;
    private deadLine: optionalStringField;
    private status: String;

    constructor(private taskStrategy: ITaskStrategy) { }


    getTitle(): String {
        return this.title;
    }
    setTitle(newTitle: String): this {
        this.taskStrategy.checkTitle(newTitle);
        this.title = newTitle;
        return this;
    }
    getDescription(): optionalStringField {
        return this.description;
    }
    setDescription(newDescription: optionalStringField): this {
        this.taskStrategy.checkDescription(newDescription);
        this.description = newDescription;
        return this;
    }
    getDeadLine(): optionalStringField {
        return this.deadLine;
    }
    setDeadLine(newDeadLine: optionalStringField): this {
        this.taskStrategy.checkDeadLine(newDeadLine);
        this.deadLine = newDeadLine;
        return this;
    }
    getStatus(): String {
        return this.status;
    }
    setStatus(newStatus: String): this {
        this.taskStrategy.checkStatus(newStatus);
        this.status = newStatus;
        return this;
    }

    toJSON(): this {
        const copy = this;
        if (copy.taskStrategy) {
            delete (copy as any).taskStrategy;
        }
        return copy;
    }

}