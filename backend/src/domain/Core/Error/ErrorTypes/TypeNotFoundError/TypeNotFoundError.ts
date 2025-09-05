import { GenericError, IInstantiatedErrorProps } from "../GenericError/GenericError";
import { ITypeNotFoundError } from "./ITypeNotFoundError";

export class TypeNotFoundError extends GenericError implements ITypeNotFoundError {

    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "TypeNotFoundError",
            message: "The field type cannot be defined ",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }

}