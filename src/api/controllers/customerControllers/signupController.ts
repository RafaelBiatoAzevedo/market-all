export {};
const { signupService } = require('../../services/customerServices');

module.exports = async (req: any, res: any) => {
  const body = req.body;
  const response = await signupService(body);

  res.status(201).json(response);
};
