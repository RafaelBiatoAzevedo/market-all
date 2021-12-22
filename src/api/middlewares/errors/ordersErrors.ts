module.exports = (err: any, _req: any, _res: any, next: any) => {
  if (err.message === 'Invalid entries. Correct and try again.') {
    const newError: any = new Error(err.message);
    newError.status = 400;
    return next(newError);
  }

  if (err.message === 'No inserted order') {
    const newError: any = new Error(err.message);
    newError.status = 409;
    return next(newError);
  }

  if (err.message === 'Not found order') {
    const newError: any = new Error(err.message);
    newError.status = 404;
    return next(newError);
  }

  return next(err);
};
