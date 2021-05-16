import deepmerge from 'deepmerge';

import { development } from './development';
import { production } from './production';

const env = process.env.NODE_ENV || 'development';

type EnvBaseConfig = {
  NODE_ENV: string;
  PORT: string;
  MONGODB_URI: string;
  jwt: {
    JWT_AUTH_SECRET: string;
    JWT_AUTH_EXPIRES: string;
    JWT_REFRESH_SECRET: string;
    JWT_REFRESH_EXPIRES: string;
  };
};
// This holds values that are consistent across all platforms
const baseConfig: Partial<EnvBaseConfig> = {
  NODE_ENV: env,
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  jwt: {
    JWT_AUTH_SECRET: '',
    JWT_AUTH_EXPIRES: (60 * 60 * 24 * 1).toString(),
    JWT_REFRESH_SECRET: '',
    JWT_REFRESH_EXPIRES: (60 * 60 * 24 * 7).toString(),
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
