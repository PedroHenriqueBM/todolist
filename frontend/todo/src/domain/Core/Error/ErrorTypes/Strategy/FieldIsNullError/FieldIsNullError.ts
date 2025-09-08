import { GenericError, IInstantiatedErrorProps } from "../../GenericError/GenericError";
import { IFieldIsNullError } from "./IFieldIsNullError";

export class FieldIsNullError extends GenericError implements IFieldIsNullError {

    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "FieldIsNullError",
            message: "The field can't be null",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }

}