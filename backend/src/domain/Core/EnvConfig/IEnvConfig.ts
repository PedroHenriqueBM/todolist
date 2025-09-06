
interface ILoadEnvconfig {
    path: String
}

interface IEnvConfig {
    load(props: ILoadEnvconfig): any;
}

export { ILoadEnvconfig, IEnvConfig }