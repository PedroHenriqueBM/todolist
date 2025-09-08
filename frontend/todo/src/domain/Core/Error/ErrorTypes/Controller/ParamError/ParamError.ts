import { GenericError, IInstantiatedErrorProps } from "../../GenericError/GenericError";
import { IParamError } from "./IParamError";

export class ParamError extends GenericError implements IParamError {

    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "ParamError",
            message: "Error on request param",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }

}