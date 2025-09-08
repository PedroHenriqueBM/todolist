import { GenericError, IInstantiatedErrorProps } from "../../GenericError/GenericError";
import { IBodyError } from "./IBodyError";

export class BodyError extends GenericError implements IBodyError {

    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "BodyError",
            message: "Error on request body",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }

}