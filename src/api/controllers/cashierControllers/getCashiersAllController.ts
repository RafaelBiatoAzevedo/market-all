export {};
const { getCashiersAllService } = require('../../services/cashierServices');

module.exports = async (_req: any, res: any) => {
  const response = await getCashiersAllService();

  res.status(200).json(response);
};
