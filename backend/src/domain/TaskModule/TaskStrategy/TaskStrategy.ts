
import { DateFormatError } from "../../Core/Error/ErrorTypes/DateFormatError/DateFormatError";
import { FieldIsNotStringError } from "../../Core/Error/ErrorTypes/FieldIsNotStringError/FieldIsNotStringError";
import { TypeNotFoundError } from "../../Core/Error/ErrorTypes/TypeNotFoundError/TypeNotFoundError";
import { WrongLengthError } from "../../Core/Error/ErrorTypes/WrongLengthError/WrongLengthError";
import { Strategy } from "../../Core/Strategy/Strategy";
import { optionalStringField } from "../../Core/Type/OptionalStringField";
import { ITaskStrategy } from "./ITaskStrategy";

export class TaskStrategy extends Strategy implements ITaskStrategy {

    checkTitle(newTitle: String): void {

        const minLength = 1;
        const maxLength = 100;
        const errorModule = "TaskStrategy/checkTitle"
        const errorStatus = 400;

        if (this.isString(newTitle).not().build()) {

            throw new FieldIsNotStringError({ cause: `Title isn't a string -> ${newTitle}`, module: "TaskStrategy/CheckTitle", status: 400 });

        } else {

            if (this.checkMinLengthString(minLength, newTitle).not().build()) {

                throw new WrongLengthError({ cause: `${newTitle} < min length(1)`, module: errorModule, status: errorStatus });

            } else if (this.checkMaxLengthString(maxLength, newTitle).not().build()) {

                throw new WrongLengthError({ cause: `${newTitle} > max length(200)`, module: errorModule, status: errorStatus });

            }


        }

    }
    checkDescription(newDescription: optionalStringField): void {

        const errorModule = "TaskStrategy/checkDescription";
        const errorStatus = 400;
        const minLength = 1;
        const maxLength = 200;

        if (this.isString(newDescription).build()) {


            if (this.checkMinLengthString(minLength, newDescription).not().build()) {

                throw new WrongLengthError({ cause: `${newDescription} < min length(1)`, module: errorModule, status: errorStatus });

            } else if (this.checkMaxLengthString(maxLength, newDescription).not().build()) {

                throw new WrongLengthError({ cause: `${newDescription} > max length(200)`, module: errorModule, status: errorStatus });

            }

        } else if (this.isNull(newDescription).not().build() && this.isUndefined(newDescription).not().build()) {
            throw new TypeNotFoundError({ cause: `Description type not allowed -> ${newDescription}`, module: errorModule, status: errorStatus })
        }

    }
    checkDeadLine(newDeadLine: optionalStringField): void {

        const errorModule = "TaskStrategy/checkDeadLine";
        const errorStatus = 400;

        if (this.isString(newDeadLine)) {

            if (this.isDate(newDeadLine, "ptBr").not().build()) {
                throw new DateFormatError({ cause: `${newDeadLine} is in wrong format`, module: errorModule, status: errorStatus });
            }

        } else if (this.isNull(newDeadLine).not().build() && this.isUndefined(newDeadLine).not().build()) {
            throw new TypeNotFoundError({ cause: `DeadLine type not allowed -> ${newDeadLine}`, module: errorModule, status: errorStatus })
        }

    }
    checkStatus(newStatus: String): void {

        const errorModule = "TaskStrategy/checkDescription";
        const errorStatus = 400;


        if (!(this.isString(newStatus) && (newStatus === "PENDING" || newStatus === "COMPLETED"))) {
            throw new TypeNotFoundError({ cause: `Status type not allowed -> ${newStatus}`, module: errorModule, status: errorStatus })
        }



    }

}