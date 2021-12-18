export {};

const { getProductBySkuService } = require('../../services/productServices');

module.exports = async (req: any, res: any) => {
  const { sku } = req.params;

  const response = await getProductBySkuService(sku);

  return res.status(200).json(response);
};
