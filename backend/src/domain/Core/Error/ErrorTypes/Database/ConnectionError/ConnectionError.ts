import { GenericError, IInstantiatedErrorProps } from "../../GenericError/GenericError";
import { IConnectionError } from "./IConnectionError";

export class ConnectionError extends GenericError implements IConnectionError {

    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "ConnectionError",
            message: "Error making connection",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }


}