module.exports = (err: any, _req: any, _res: any, next: any) => {
  if (err.message === 'No inserted device') {
    const newError: any = new Error(err.message);
    newError.status = 409;
    return next(newError);
  }

  next(err);
};
