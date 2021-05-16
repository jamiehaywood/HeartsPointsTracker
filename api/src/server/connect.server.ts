import mongoose, { ConnectOptions } from 'mongoose';

import config from '../config';

const connect = (url: string, args?: ConnectOptions) =>
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    ...args,
  });

const checkConnection = () => {
  const db = mongoose.connection;
  db.on('error', () => {
    if (config.NODE_ENV === 'development')
      // eslint-disable-next-line no-console
      console.log('❌ There was an error connecting to the DB');
  });
  db.once('open', function () {
    if (config.NODE_ENV === 'development')
      // eslint-disable-next-line no-console
      console.log('✅ Successfully connected to DB');
  });
};
checkConnection();

export default connect;
