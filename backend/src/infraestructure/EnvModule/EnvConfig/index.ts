
import { EnvConfig } from "./EnvConfig";
import { envConfigStrategy } from "./EnvConfigStrategy";

const envConfig = new EnvConfig(envConfigStrategy);

export { envConfig };