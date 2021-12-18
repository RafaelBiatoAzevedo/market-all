export {};
const { getProductsAllService } = require('../../services/productServices');

module.exports = async (_req: any, res: any) => {
  const response = await getProductsAllService();

  res.status(200).json(response);
};
