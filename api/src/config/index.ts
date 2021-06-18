import deepmerge from 'deepmerge';

import { development } from './development';
import { production } from './production';

const env = process.env.NODE_ENV || 'development';

type EnvBaseConfig = {
  MONGODB_URI: string;
  NODE_ENV: string;
  PORT: string;
  jwt: {
    JWT_AUTH_EXPIRES: string;
    JWT_AUTH_SECRET: string;
    JWT_REFRESH_EXPIRES: string;
    JWT_REFRESH_SECRET: string;
  };
};
// This holds values that are consistent across all platforms
const baseConfig: Partial<EnvBaseConfig> = {
  MONGODB_URI: process.env.MONGODB_URI,
  NODE_ENV: env,
  PORT: process.env.PORT,
  jwt: {
    JWT_AUTH_EXPIRES: (60 * 60 * 24 * 1).toString(),
    JWT_AUTH_SECRET: '',
    JWT_REFRESH_EXPIRES: (60 * 60 * 24 * 7).toString(),
    JWT_REFRESH_SECRET: '',
  },
};

let envConfig = {};

switch (env) {
  case 'production':
    envConfig = production;
    break;

  default:
    envConfig = development;
    break;
}

export default deepmerge(baseConfig, envConfig);
