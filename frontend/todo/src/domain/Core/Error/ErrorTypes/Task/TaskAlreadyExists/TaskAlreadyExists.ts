import { GenericError, IInstantiatedErrorProps } from "../../GenericError/GenericError";
import { ITaskAlreadyExists } from "./ITaskAlreadyExists";

export class TaskAlreadyExists extends GenericError implements ITaskAlreadyExists {


    constructor(props: IInstantiatedErrorProps) {
        super({
            type: "TaskAlreadyExists",
            message: "The task already exists",
            module: props.module,
            status: props.status,
            cause: props.cause
        })
    }


}