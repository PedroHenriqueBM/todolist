
import { ITaskStrategy } from "../../../../domain/TaskModule/Task/TaskStrategy/ITaskStrategy";

export interface ITaskControllerStrategy extends ITaskStrategy {

    checkLimit(field: any): void;
    checkOffset(field: any): void;
    checkReadAllTasks(limit: any, offset: any): void;

    checkId(field: any): void;
    checkReadTaskById(id: any): void;

    checkTitle(field: any): void;
    checkReadTaskByTitle(title: any): void;

    checkDeadLine(field: any): void;
    checkDescription(field: any): void;
    checkCreateTask(title: any, description: any, deadLine: any): void;

    checkOptionalTitle(field: any): void;
    checkStatus(status: any): void;
    checkUpdateTask(id: any, title: any, deadLine: any, description: any, status: any): void;

    checkDeleteTask(id: any): void;

}