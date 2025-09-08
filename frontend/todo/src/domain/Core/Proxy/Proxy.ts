import { UnexpectedError } from "../Error/ErrorTypes/UnexpectedError/UnexpectedError";
import { IProxy, IProxyExecutionProps, IProxyResponse } from "./IProxy";

export class Proxy implements IProxy {


    async execute(props: IProxyExecutionProps): Promise<IProxyResponse> {
        try {

            let result = await props.operation();

            let response = (typeof result === "undefined" || result === null) ? "Successful Operation!" : result;
            return {
                status: 200,
                data: response,
                name: props.name
            }


        } catch (err: any) {

            let finalErr = err
            if (!finalErr.type) {
                finalErr = new UnexpectedError({ cause: err.message, module: "Proxy", status: 500 });
            }


            return {
                status: finalErr.status,
                data: finalErr,
                name: props.name
            }
        }

    }

}