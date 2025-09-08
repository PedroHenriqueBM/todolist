import { GenericError, IInstantiatedErrorProps } from "../../GenericError/GenericError";
import { ITaskDoesNotExist } from "./ITaskDoesNotExist";

export class TaskDoesNotExist extends GenericError implements ITaskDoesNotExist {

    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "TaskDoesNotExist",
            message: "The task does not exist",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }

}