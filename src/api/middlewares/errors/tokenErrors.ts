module.exports = (err: any, _req: any, _res: any, next: any) => {
  if (err.message === 'jwt malformed') {
    const newError: any = new Error(err.message);
    newError.status = 401;
    return next(newError);
  }

  if (err.message === 'invalid token') {
    const newError: any = new Error(err.message);
    newError.status = 401;
    return next(newError);
  }

  if (err.message === 'jwt must be provided') {
    const newError: any = new Error();
    newError.status = 401;
    newError.message = 'missing auth token';
    return next(newError);
  }

  return next(err);
};
