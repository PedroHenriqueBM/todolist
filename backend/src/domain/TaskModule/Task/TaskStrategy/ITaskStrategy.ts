import { IStrategy } from "../../../Core/Strategy/IStrategy";

import { optionalStringField } from "../../../Core/Type/OptionalStringField";

export interface ITaskStrategy extends IStrategy {
    checkId(newId: String): void;
    checkCreatedAt(newCreatedAt: String): void;
    checkUpdatedAt(newUpdatedAt: optionalStringField): void;
    checkTitle(newTitle: String): void;
    checkDescription(newDescription: optionalStringField): void;
    checkDeadLine(newDeadLine: optionalStringField): void;
    checkStatus(newStatus: String): void;
}