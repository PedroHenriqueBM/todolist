import { IStrategy } from "../../../../domain/Core/Strategy/IStrategy";

export interface IEnvConfigStrategy extends IStrategy {

    checkDatabaseUrl(field: any): void;

    checkApiPort(field: any): void;
    checkApiProtocols(field: any): void;
    checkApiHosts(field: any): void;
    checkBaseUrlApi(field: any): void;

    checkProjectName(field: any): void;
    checkProjectDescription(field: any): void;


}