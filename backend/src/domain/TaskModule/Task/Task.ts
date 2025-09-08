
import { optionalStringField } from "../../Core/Type/OptionalStringField";
import { ITaskStrategy } from "./TaskStrategy/ITaskStrategy";
import { ITask } from "./ITask";


export class Task implements ITask {

    private id: string;
    private title: string;
    private description: optionalStringField;
    private deadLine: optionalStringField;
    private status: string;
    private createdAt: string;
    private updatedAt: optionalStringField;

    constructor(private taskStrategy: ITaskStrategy) { }


    getDeadLineIsoString(): optionalStringField {
        return this.taskStrategy.parseBRDateToISO(this.deadLine!)
    }
    getCreateAtIsoString(): optionalStringField {
        return this.taskStrategy.parseBRDateToISO(this.createdAt!)
    }
    getUpdatedAtIsoString(): optionalStringField {
        return this.taskStrategy.parseBRDateToISO(this.updatedAt!)
    }

    getId(): string {
        return this.id;
    }
    setId(newId: string): this {
        this.taskStrategy.checkId(newId);
        this.id = newId;
        return this;
    }
    getTitle(): string {
        return this.title;
    }
    setTitle(newTitle: string): this {
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
    getStatus(): string {
        return this.status;
    }
    setStatus(newStatus: string): this {
        this.taskStrategy.checkStatus(newStatus);
        this.status = newStatus;
        return this;
    }
    getCreatedAt(): string {
        return this.createdAt;
    }
    setCreatedAt(newCreatedAt: string): this {
        this.taskStrategy.checkCreatedAt(newCreatedAt);
        this.createdAt = newCreatedAt;
        return this;
    }
    getUpdatedAt(): optionalStringField {
        return this.updatedAt;
    }
    setUpdatedAt(newUpdatedAt: optionalStringField): this {
        this.taskStrategy.checkUpdatedAt(newUpdatedAt);
        this.updatedAt = newUpdatedAt
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