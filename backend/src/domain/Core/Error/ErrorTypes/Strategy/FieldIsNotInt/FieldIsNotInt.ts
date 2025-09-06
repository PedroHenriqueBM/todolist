import { GenericError, IInstantiatedErrorProps } from "../../GenericError/GenericError";
import { IFieldIsNotInt } from "./IFieldIsNotInt";


export class FieldIsNotInt extends GenericError implements IFieldIsNotInt {

    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "FieldIsNotInt",
            message: "The field must be an integer",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }

}