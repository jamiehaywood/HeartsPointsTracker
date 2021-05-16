/* eslint-disable no-console */
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import express from 'express';

import config from '../config';
import router from '../routes';
import { isDev } from '../utils/environment';
import connect from './connect.server';
import logger from './logger.server';

export const app = express();

app.use(logger);

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.disable('x-powered-by');

app.use('/api', router);

export const start = async () => {
  try {
    await connect(config.MONGODB_URI);
    app.listen(config.PORT, () => {
      if (isDev())
        console.log(`💚 Hearts API started on http://localhost:${config.PORT}`);
    });
  } catch (e) {
    if (isDev()) console.error(e);
  }
};
