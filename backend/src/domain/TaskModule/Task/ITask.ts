
import { optionalStringField } from "../../Core/Type/OptionalStringField";

enum taskStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED"
}

interface ITask {

    getId(): string;
    setId(newId: string): this;

    getTitle(): string;
    setTitle(newTitle: string): this;

    getDescription(): optionalStringField;
    setDescription(newDescription: optionalStringField): this;

    getDeadLine(): optionalStringField;
    getDeadLineIsoString(): optionalStringField;
    setDeadLine(newDeadLine: optionalStringField): void;

    getStatus(): string;
    setStatus(newStatus: string): this;

    getCreatedAt(): string;
    getCreateAtIsoString(): optionalStringField;
    setCreatedAt(newCreatedAt: string): this;

    getUpdatedAt(): optionalStringField;
    getUpdatedAtIsoString(): optionalStringField;
    setUpdatedAt(newUpdatedAt: optionalStringField): this;

    toJSON(): this;

}


export { taskStatus, ITask }