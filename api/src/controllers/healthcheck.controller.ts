import { ExpressMiddleware as EM } from '../interfaces/utils';

export const ping: EM = async (req, res) =>
  res.status(200).json({ message: '🏓 pong' });
