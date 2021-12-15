const services = require('../services');

module.exports = async (req: any, res: any) => {
  const body = req.body;
  const response = await services.signupService(body);

  res.status(201).json(response);
};
