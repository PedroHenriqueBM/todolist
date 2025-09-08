
export interface IProxyExecutionProps {
    operation: Function,
    name: string
}

export interface IProxyResponse {
    status: number,
    data: any,
    name: string
}



export interface IProxy {

    execute(props: IProxyExecutionProps): Promise<IProxyResponse>;

}