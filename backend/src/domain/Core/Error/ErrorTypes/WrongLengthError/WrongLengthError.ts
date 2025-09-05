import { GenericError, IInstantiatedErrorProps } from "../GenericError/GenericError";
import { IWrongLengthError } from "./IWrongLengthError";

export class WrongLengthError extends GenericError implements IWrongLengthError {


    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "WrongLengthError",
            message: "The field length is wrong",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }


}