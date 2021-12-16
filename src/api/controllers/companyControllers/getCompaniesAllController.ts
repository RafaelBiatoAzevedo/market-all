export {};
const { getCompaniesAllService } = require('../../services/companyServices');

module.exports = async (_req: any, res: any) => {
  const response = await getCompaniesAllService();

  res.status(200).json(response);
};
