export {};
const services = require('../services');

module.exports = async (req: any, res: any) => {
  const body = req.body;
  const response = await services.signinService(body);

  res.status(200).json(response);
};
