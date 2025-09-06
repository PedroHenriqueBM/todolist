import { IStrategy } from "../../../../domain/Core/Strategy/IStrategy";

export interface IEnvConfigStrategy extends IStrategy {

    checkApiPort(field: any): void;
    checkBaseUrlApi(field: any): void;

}