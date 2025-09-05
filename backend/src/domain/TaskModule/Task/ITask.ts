
import { optionalStringField } from "../../Core/Type/OptionalStringField";

enum taskStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED"
}

interface ITask {

    getTitle(): String;
    setTitle(newTitle: String): this;

    getDescription(): optionalStringField;
    setDescription(newDescription: optionalStringField): this;

    getDeadLine(): optionalStringField;
    setDeadLine(newDeadLine: optionalStringField): void;

    getStatus(): String;
    setStatus(newStatus: String): this;

    toJSON(): this;

}


export { taskStatus, ITask }