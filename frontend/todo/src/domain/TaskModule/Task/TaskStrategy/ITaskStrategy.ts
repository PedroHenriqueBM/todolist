import { IStrategy } from "../../../Core/Strategy/IStrategy";

import { optionalStringField } from "../../../Core/Type/OptionalStringField";

export interface ITaskStrategy extends IStrategy {
    checkId(newId: string): void;
    checkCreatedAt(newCreatedAt: string): void;
    checkUpdatedAt(newUpdatedAt: optionalStringField): void;
    checkTitle(newTitle: string): void;
    checkDescription(newDescription: optionalStringField): void;
    checkDeadLine(newDeadLine: optionalStringField): void;
    checkStatus(newStatus: string): void;
    checkOptionalTitle(newTitle: any): void;
    checkOptionalStatus(newStatus: any): void
}