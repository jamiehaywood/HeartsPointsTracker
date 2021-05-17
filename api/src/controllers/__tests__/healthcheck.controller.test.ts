import { Request, Response } from 'express';

import { ping } from '../healthcheck.controller';

describe('healthcheck', () => {
  test('ping', async () => {
    const req = {} as Request;

    const res = {
      json(body) {
        expect(body).toEqual({ message: '🏓 pong' });
      },

      status(status) {
        expect(status).toBe(200);
        return this;
      },
    } as Response;

    const next = jest.fn();

    await ping(req, res, next);
  });
});
