
export interface IProxyExecutionProps {
    operation: Function,
    hateoas: Object,
    name: String
}

export interface IProxyResponse {
    status: number,
    data: any,
    hateoas: Object,
    name: String
}

export interface IProxy {

    execute(props: IProxyExecutionProps): Promise<IProxyResponse>;

}