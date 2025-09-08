import { GenericError, IInstantiatedErrorProps } from "../../GenericError/GenericError";
import { IQueryError } from "./IQueryError";

export class QueryError extends GenericError implements IQueryError {

    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "QueryError",
            message: "Error on request query",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }

}