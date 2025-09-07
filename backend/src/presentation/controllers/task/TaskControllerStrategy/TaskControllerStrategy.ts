import { BodyError } from "../../../../domain/Core/Error/ErrorTypes/Controller/BodyError/BodyError";
import { ParamError } from "../../../../domain/Core/Error/ErrorTypes/Controller/ParamError/ParamError";
import { QueryError } from "../../../../domain/Core/Error/ErrorTypes/Controller/QueryError/QueryError";
import { TaskStrategy } from "../../../../domain/TaskModule/Task/TaskStrategy/TaskStrategy";
import { ITaskControllerStrategy } from "./ITaskControllerStrategy";

export class TaskControllerStrategy extends TaskStrategy implements ITaskControllerStrategy {

    checkLimit(field: any): void {


        const module = "TaskControllerStrategy/limit";
        const status = 400
        if (this.isInt(field).build()) {


            if (this.checkMinLengthNumber(1, field).not().build()) {


                throw new QueryError({
                    cause: `Limit(${field}) must be bigger tha 0`,
                    module: module,
                    status: status
                });

            } else if (this.checkMaxLengthNumber(100, field).not().build()) {


                throw new QueryError({
                    cause: `Limit(${field}) must be less than 101`,
                    module: module,
                    status: status
                });

            }

        } else {

            throw new QueryError({
                cause: `Limit(${field})  isn't int`,
                module: module,
                status: status
            });

        }
    }
    checkOffset(field: any): void {

        const module = "TaskControllerStrategy/offset";
        const status = 400;

        if (this.isInt(field).build()) {

            if (this.checkMinLengthNumber(0, field).not().build()) {

                throw new QueryError({
                    cause: `Offset(${field}) must be bigger tha 0`,
                    module: module,
                    status: status
                });

            }

        } else {

            throw new QueryError({
                cause: `Offset(${field}) isn't int`,
                module: module,
                status: status
            });

        }

    }
    checkReadAllTasks(limit: any, offset: any): void {
        this.checkLimit(limit);
        this.checkOffset(offset);
    }
    checkReadTaskById(id: any): void {

        const module = "TaskControllerStrategy/checkReadTaskById";
        const status = 400;

        try {
            this.checkId(id);
        } catch (err: any) {
            throw new ParamError({
                cause: err,
                module: module,
                status: status
            });
        }
    }
    checkReadTaskByTitle(title: any): void {

        const module = "TaskControllerStrategy/checkReadTaskByTitle";
        const status = 400;

        try {
            this.checkTitle(title);
        } catch (err: any) {
            throw new QueryError({
                cause: err,
                module: module,
                status: status
            });
        }
    }
    checkCreateTask(title: any, description: any, deadLine: any): void {

        const module = "TaskControllerStrategy/checkCreateTask";
        const status = 400;

        try {
            this.checkTitle(title);
            this.checkDescription(description);
            this.checkDeadLine(deadLine);

        } catch (err: any) {
            throw new BodyError({
                cause: err,
                module: module,
                status: status
            });
        }

    }
    checkUpdateTask(id: any, title: any, deadLine: any, description: any, status: any): void {

        const module = "TaskControllerStrategy/checkCreateTask";
        const statusCode = 400;

        try {
            this.checkId(id);
        } catch (err: any) {
            throw new ParamError({
                cause: err,
                module: module,
                status: statusCode
            });
        }

        try {
            this.checkOptionalTitle(title);
            this.checkDescription(description);
            this.checkDeadLine(deadLine);
            this.checkOptionalStatus(status);
        } catch (err: any) {
            throw new BodyError({
                cause: err,
                module: module,
                status: statusCode
            });
        }
    }
    checkDeleteTask(id: any): void {
        const module = "TaskControllerStrategy/checkDeleteTask";
        const status = 400;

        try {
            this.checkId(id);
        } catch (err: any) {
            throw new ParamError({
                cause: err,
                module: module,
                status: status
            });
        }
    }

}