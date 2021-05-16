import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import express from 'express';

import config from '../config';
import router from '../routes';
import connect from './connect.server';

export const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');

app.use('/api', router);

export const start = async () => {
  try {
    await connect(config.MONGODB_URI);
    app.listen(config.PORT, () => {
      if (config.NODE_ENV === 'development')
        // eslint-disable-next-line no-console
        console.log(`💚 Hearts API started on http://localhost:${config.PORT}`);
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    if (config.NODE_ENV === 'development') console.error(e);
  }
};
