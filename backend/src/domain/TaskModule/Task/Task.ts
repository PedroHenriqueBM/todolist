
import { optionalDateField } from "../../Core/Type/OptionalDateField";
import { optionalStringField } from "../../Core/Type/OptionalStringField";
import { ITask } from "./ITask";

export class Task implements ITask {



    private title: String;
    private description: optionalStringField;
    private deadLine: optionalDateField;
    private status: String;

    getTitle(): String {
        return this.title;
    }
    setTitle(newTitle: String): void {
        this.title = newTitle;
    }
    getDescription(): optionalStringField {
        return this.description;
    }
    setDescription(newDescription: optionalStringField): void {
        this.description = newDescription;
    }
    getDeadLine(): optionalDateField {
        return this.deadLine;
    }
    setDeadLine(newDeadLine: optionalDateField): void {
        this.deadLine = newDeadLine;
    }
    getStatus(): String {
        return this.status;
    }
    setStatus(newStatus: String): void {
        this.status = newStatus;
    }


}