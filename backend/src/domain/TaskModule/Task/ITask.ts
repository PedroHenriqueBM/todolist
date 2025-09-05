
import { optionalStringField } from "../../Core/Type/OptionalStringField";

enum taskStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED"
}

interface ITask {

    getTitle(): String;
    setTitle(newTitle: String): void;

    getDescription(): optionalStringField;
    setDescription(newDescription: optionalStringField): void;

    getDeadLine(): optionalStringField;
    setDeadLine(newDeadLine: optionalStringField): void;

    getStatus(): String;
    setStatus(newStatus: String): void;

}


export { taskStatus, ITask }