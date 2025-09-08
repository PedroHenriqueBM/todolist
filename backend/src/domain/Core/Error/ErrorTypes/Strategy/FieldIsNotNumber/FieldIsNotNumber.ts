import { GenericError, IInstantiatedErrorProps } from "../../GenericError/GenericError";
import { IFieldIsNotNumber } from "./IFieldIsNotNumber";

export class FieldIsNotNumber extends GenericError implements IFieldIsNotNumber {

    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "FieldIsNotNumber",
            message: "The field must be a number",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }

}