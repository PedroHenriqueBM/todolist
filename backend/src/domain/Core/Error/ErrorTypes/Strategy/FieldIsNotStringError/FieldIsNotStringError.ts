import { GenericError, IInstantiatedErrorProps } from "../../GenericError/GenericError";
import { IFieldIsNotStringError } from "./IFieldIsNotStringError";


export class FieldIsNotStringError extends GenericError implements IFieldIsNotStringError {

    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "FieldIsNotStringError",
            message: "The field must be string",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }


}