import { SignupReq, SignupRes } from '../interfaces/auth';
import { ExpressMiddleware } from '../interfaces/ExpressMiddleware';

export const signupUser: ExpressMiddleware<SignupReq, SignupRes> = async (
  req,
  res
) => {
  res.json({ message: 'This route is not yet implemented' });
};
