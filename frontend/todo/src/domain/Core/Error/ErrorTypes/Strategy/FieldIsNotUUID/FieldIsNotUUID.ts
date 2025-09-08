import { GenericError, IInstantiatedErrorProps } from "../../GenericError/GenericError";
import { IFieldIsNotUUID } from "./IFieldIsNotUUID";

export class FieldIsNotUUID extends GenericError implements IFieldIsNotUUID {

    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "FieldIsNotUUID",
            message: "The field must be an UUID",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }

}