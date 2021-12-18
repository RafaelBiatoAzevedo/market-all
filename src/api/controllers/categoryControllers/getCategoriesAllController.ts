export {};
const { getCategoriesAllService } = require('../../services/categoryServices');

module.exports = async (_req: any, res: any) => {
  const response = await getCategoriesAllService();

  res.status(200).json(response);
};
