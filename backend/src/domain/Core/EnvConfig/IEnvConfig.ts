
interface ILoadEnvconfig {
    path: string
}

interface IEnvConfig {
    load(props: ILoadEnvconfig): any;
}

export { ILoadEnvconfig, IEnvConfig }