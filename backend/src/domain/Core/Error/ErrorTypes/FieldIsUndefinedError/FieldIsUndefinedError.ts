import { GenericError, IInstantiatedErrorProps } from "../GenericError/GenericError";
import { IFieldIsUndefinedError } from "./IFieldIsUndefinedError";


export class FieldIsUndefined extends GenericError implements IFieldIsUndefinedError {

    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "FieldIsUndefinedError",
            message: "The field can't be undefined",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }

}