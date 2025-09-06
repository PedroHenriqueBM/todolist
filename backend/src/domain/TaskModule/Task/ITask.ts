
import { optionalStringField } from "../../Core/Type/OptionalStringField";

enum taskStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED"
}

interface ITask {

    getId(): String;
    setId(newId: String): this;

    getTitle(): String;
    setTitle(newTitle: String): this;

    getDescription(): optionalStringField;
    setDescription(newDescription: optionalStringField): this;

    getDeadLine(): optionalStringField;
    setDeadLine(newDeadLine: optionalStringField): void;

    getStatus(): String;
    setStatus(newStatus: String): this;

    getCreatedAt(): String;
    setCreatedAt(newCreatedAt: String): this;

    getUpdatedAt(): optionalStringField;
    setUpdatedAt(newUpdatedAt: optionalStringField): this;

    toJSON(): this;

}


export { taskStatus, ITask }