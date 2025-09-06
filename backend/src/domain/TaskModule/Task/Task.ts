
import { optionalStringField } from "../../Core/Type/OptionalStringField";
import { ITaskStrategy } from "./TaskStrategy/ITaskStrategy";
import { ITask } from "./ITask";


export class Task implements ITask {

    private id: String;
    private title: String;
    private description: optionalStringField;
    private deadLine: optionalStringField;
    private status: String;
    private createdAt: String;
    private updatedAt: optionalStringField;

    constructor(private taskStrategy: ITaskStrategy) { }

    getId(): String {
        return this.id;
    }
    setId(newId: String): this {
        this.taskStrategy.checkId(newId);
        this.id = newId;
        return this;
    }
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
    getCreatedAt(): String {
        return this.createdAt;
    }
    setCreatedAt(newCreatedAt: String): this {
        this.taskStrategy.checkCreatedAt(newCreatedAt);
        this.createdAt = newCreatedAt;
        return this;
    }
    getUpdatedAt(): optionalStringField {
        return this.updatedAt;
    }
    setUpdatedAt(newUpdatedAt: optionalStringField): this {
        this.setUpdatedAt(newUpdatedAt);
        this.updatedAt = newUpdatedAt;
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