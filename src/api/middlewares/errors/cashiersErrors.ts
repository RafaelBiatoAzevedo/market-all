module.exports = (err: any, _req: any, _res: any, next: any) => {
  if (
    err.message === 'Invalid body schema. Correct and try again.' ||
    err.message === 'Not found paymentType in entries' ||
    err.message === 'Not found cardType in entries'
  ) {
    const newError: any = new Error(err.message);
    newError.status = 400;
    return next(newError);
  }

  if (
    err.message === 'No opened cashier' ||
    err.message === 'No closed cashier' ||
    err.message === 'No blocked cashier' ||
    err.message === 'Cashier already registered' ||
    err.message === 'No inserted transaction in cashier'
  ) {
    const newError: any = new Error(err.message);
    newError.status = 409;
    return next(newError);
  }

  if (
    err.message === 'Not found cashier' ||
    err.message === 'Not found company, segment or device'
  ) {
    const newError: any = new Error(err.message);
    newError.status = 404;
    return next(newError);
  }

  return next(err);
};
