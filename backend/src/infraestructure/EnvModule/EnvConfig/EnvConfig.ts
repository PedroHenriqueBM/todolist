
import dotenv from 'dotenv';
import { IEnvConfigStrategy } from './EnvConfigStrategy/IEnvConfigStrategy';
import { IEnvConfig, ILoadEnvconfig } from '../../../domain/Core/EnvConfig/IEnvConfig';

export class EnvConfig implements IEnvConfig {

    constructor(private envConfigStrategy: IEnvConfigStrategy) { };

    load(props: ILoadEnvconfig) {

        const mode = process.env.NODE_ENV;

        dotenv.config({ path: `${props.path}/.env.${mode}` });

        const schema = {
            API_PORT: process.env.API_PORT,
            BASE_URL_API: process.env.BASE_URL_API
        }

        this.envConfigStrategy.checkApiPort(schema.API_PORT);
        this.envConfigStrategy.checkBaseUrlApi(schema.BASE_URL_API);


    }


}