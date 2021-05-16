import morgan, { StreamOptions } from 'morgan';
import winston from 'winston';

import { isDev, isNotDev } from '../utils/environment';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => (isDev() ? 'debug' : 'warn');

winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'blue',
  debug: 'white',
});

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),

  winston.format.colorize({ all: true }),

  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const transports = [
  new winston.transports.Console(),

  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  new winston.transports.File({ filename: 'logs/all.log' }),
];

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

const stream: StreamOptions = {
  write: (message) => Logger.http(message),
};

const skip = () => isNotDev();

const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',

  { stream, skip }
);

export default morganMiddleware;
