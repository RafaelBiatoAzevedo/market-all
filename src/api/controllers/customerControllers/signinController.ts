export {};
const { signinService } = require('../../services/customerServices');

module.exports = async (req: any, res: any) => {
  const body = req.body;
  const response = await signinService(body);

  res.status(200).json(response);
};
