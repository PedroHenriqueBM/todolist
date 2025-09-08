import { GenericError, IInstantiatedErrorProps } from "../GenericError/GenericError";
import { IEnvironmentVariableError } from "./IEnvironmentVariableError";

export class EnvironmentVariableError extends GenericError implements IEnvironmentVariableError {

    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "EnvironmentVariableError",
            message: "Environment Variable in wrong format",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }


}