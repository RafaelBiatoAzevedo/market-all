module.exports = (err: any, _req: any, _res: any, next: any) => {
  if (err.message === 'Not found device') {
    const newError: any = new Error(err.message);
    newError.status = 404;
    return next(newError);
  }

  next(err);
};
