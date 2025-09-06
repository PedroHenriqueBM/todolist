import { GenericError, IInstantiatedErrorProps } from "../GenericError/GenericError";
import { IUnexpectedError } from "./IUnexpectedError";

export class UnexpectedError extends GenericError implements IUnexpectedError {

    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "UnexpectedError",
            message: "the system was unable to identify the error",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }

}