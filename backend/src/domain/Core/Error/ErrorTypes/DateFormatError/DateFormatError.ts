import { GenericError, IInstantiatedErrorProps } from "../GenericError/GenericError";
import { IDateFormatError } from "./IDateFormatError";




export class DateFormatError extends GenericError implements IDateFormatError {

    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "DateFormatError",
            message: "The date is in wrong format",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }

}