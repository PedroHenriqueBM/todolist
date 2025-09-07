
import dotenv from 'dotenv';
import { IEnvConfigStrategy } from './EnvConfigStrategy/IEnvConfigStrategy';
import { IEnvConfig, ILoadEnvconfig } from '../../../domain/Core/EnvConfig/IEnvConfig';

export class EnvConfig implements IEnvConfig {

    constructor(private envConfigStrategy: IEnvConfigStrategy) { };

    load(props: ILoadEnvconfig) {

        const mode = process.env.NODE_ENV;


        dotenv.config({ path: `${props.path}/.env.${mode}`, quiet: true },);


        const schema = {
            DATABASE_URL: process.env.DATABASE_URL,
            API_PORT: Number(process.env.API_PORT),
            API_PROTOCOLS: process.env.API_PROTOCOLS,
            API_HOSTS: process.env.API_HOSTS,
            BASE_URL_API: process.env.BASE_URL_API,
            PROJECT_NAME: process.env.PROJECT_NAME,
            PROJECT_DESCRIPTION: process.env.PROJECT_DESCRIPTION
        }


        this.envConfigStrategy.checkDatabaseUrl(schema.DATABASE_URL);

        this.envConfigStrategy.checkApiPort(schema.API_PORT);
        this.envConfigStrategy.checkApiProtocols(schema.API_PROTOCOLS);
        this.envConfigStrategy.checkApiHosts(schema.API_HOSTS);
        this.envConfigStrategy.checkBaseUrlApi(schema.BASE_URL_API);
        this.envConfigStrategy.checkProjectName(schema.PROJECT_NAME);
        this.envConfigStrategy.checkProjectDescription(schema.PROJECT_DESCRIPTION);





    }


}