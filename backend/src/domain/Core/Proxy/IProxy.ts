
export interface IProxyExecutionProps {
    operation: Function,
    hateoas: Object,
    name: string
}

export interface IProxyResponse {
    status: number,
    data: any,
    hateoas: Object,
    name: string
}



export interface IProxy {

    execute(props: IProxyExecutionProps): Promise<IProxyResponse>;

}