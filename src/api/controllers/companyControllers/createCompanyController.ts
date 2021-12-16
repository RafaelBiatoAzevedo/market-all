export {};
const { createCompanyService } = require('../../services/companyServices');
const { verifyToken } = require('../../utils/jwt');

module.exports = async (req: any, res: any) => {
  const body = req.body;
  const token = req.headers.authorization;
  const { email } = await verifyToken(token);

  const response = await createCompanyService(body, email);

  res.status(201).json(response);
};
