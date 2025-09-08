
import { EnvironmentVariableError } from "../../../../domain/Core/Error/ErrorTypes/EnvironmentVariableError/EnvironmentVariableError";
import { Strategy } from "../../../../domain/Core/Strategy/Strategy";
import { IEnvConfigStrategy } from "./IEnvConfigStrategy";

export class EnvConfigStrategy extends Strategy implements IEnvConfigStrategy {

    checkDatabaseUrl(field: any): void {

        if (this.isString(field).not().build()) {
            throw new EnvironmentVariableError({
                cause: `DATABASE_URL (${field}) must be string`,
                module: "EnvConfigStrategy",
                status: 400
            });
        } else {

            const regex = /^(?<protocol>mysql|postgres|postgresql|mariadb|sqlite):\/\/(?<user>[^:]+):(?<password>[^@]+)@(?<host>[^:\/]+):(?<port>\d+)\/(?<database>[^\s]+)$/;

            if (!regex.test(field)) {
                throw new EnvironmentVariableError({
                    cause: `DATABASE_URL(${field}) in wrong format`,
                    module: "EnvConfigStrategy",
                    status: 400
                })
            }


        }

    }

    checkApiProtocols(field: any): void {

        if (this.isString(field).not().build()) {
            throw new EnvironmentVariableError({
                cause: "API_PROTOCOLS must be string",
                module: "EnvConfigStrategy",
                status: 400
            });
        } else {

            (field as string)?.split(",").forEach((item) => {

                if (this.checkMinLengthString(1, item).not().build()) {

                    throw new EnvironmentVariableError({
                        cause: `API_PROTOCOLS  (${item})  must has a min length >= 1`,
                        module: "EnvConfigStrategy",
                        status: 400
                    })

                }

            })

        }

    }
    checkApiHosts(field: any): void {

        if (this.isString(field).not().build()) {
            throw new EnvironmentVariableError({
                cause: "API_HOSTS must be string",
                module: "EnvConfigStrategy",
                status: 400
            });
        } else {

            (field as string)?.split(",").forEach((item) => {

                if (this.checkMinLengthString(1, item).not().build()) {

                    throw new EnvironmentVariableError({
                        cause: `API_HOSTS  (${item})  must has a min length >= 1`,
                        module: "EnvConfigStrategy",
                        status: 400
                    })

                }

            })

        }

    }
    checkProjectName(field: any): void {

        if (this.isString(field).not().build()) {
            throw new EnvironmentVariableError({
                cause: "PROJECT_NAME must be string",
                module: "EnvConfigStrategy",
                status: 400
            });
        } else {
            if (this.checkMinLengthString(1, field).not().build()) {

                throw new EnvironmentVariableError({
                    cause: `PROJECT_NAME  (${field})  must has a min length >= 1`,
                    module: "EnvConfigStrategy",
                    status: 400
                })

            }
        }

    }
    checkProjectDescription(field: any): void {

        if (this.isString(field).not().build()) {
            throw new EnvironmentVariableError({
                cause: "PROJECT_DESCRIPTION must be string",
                module: "EnvConfigStrategy",
                status: 400
            });
        } else {
            if (this.checkMinLengthString(1, field).not().build()) {

                throw new EnvironmentVariableError({
                    cause: `PROJECT_DESCRIPTION (${field})  must has a min length >= 1`,
                    module: "EnvConfigStrategy",
                    status: 400
                })

            }
        }

    }

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