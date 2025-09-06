
import { EnvironmentVariableError } from "../../../../domain/Core/Error/ErrorTypes/EnvironmentVariableError/EnvironmentVariableError";
import { Strategy } from "../../../../domain/Core/Strategy/Strategy";
import { IEnvConfigStrategy } from "./IEnvConfigStrategy";

export class EnvConfigStrategy extends Strategy implements IEnvConfigStrategy {

    checkApiPort(field: any): void {


        if (this.isInt(field).not().build()) {

            throw new EnvironmentVariableError({
                cause: `API_PORT (${field}) must be int`,
                module: "EnvConfigStrategy",
                status: 400
            });

        } else {

            if (this.checkMaxLengthNumber(9999, field).not().build() || this.checkMinLengthNumber(1000, field).not().build()) {

                throw new EnvironmentVariableError({
                    cause: "API_PORT must be in range 1000 until 9999",
                    module: "EnvConfigStrategy",
                    status: 400
                })

            }

        }

    }

    checkBaseUrlApi(field: any): void {

        if (this.isString(field).not().build()) {

            throw new EnvironmentVariableError({
                cause: "BASE_URL_API must be string",
                module: "EnvConfigStrategy",
                status: 400
            });

        } else {

            if (this.checkMinLengthString(1, field).not().build()) {

                throw new EnvironmentVariableError({
                    cause: `BASE_URL_API (${field})  must has a min length >= 1`,
                    module: "EnvConfigStrategy",
                    status: 400
                })

            }

        }

    }



}