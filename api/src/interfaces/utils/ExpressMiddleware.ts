import { NextFunction, Request, Response } from 'express';

import { AnyObject } from './utility.interface';

type TypedRequest<
  ReqBody = AnyObject & Request,
  QueryString = AnyObject
> = Request<AnyObject, AnyObject, Partial<ReqBody>, Partial<QueryString>>;

export type ExpressMiddleware<
  ReqBody = AnyObject,
  Res = { data?: AnyObject; message: string },
  QueryString = AnyObject
> = (
  req: Partial<TypedRequest<ReqBody, QueryString>>,
  res: Response<Res>,
  next: NextFunction
) =>
  | Promise<void | Response<Res>>
  | Promise<void>
  | ExpressMiddleware<ReqBody, Res, QueryString>;
