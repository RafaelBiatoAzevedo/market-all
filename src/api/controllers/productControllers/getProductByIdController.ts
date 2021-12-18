export {};

const { getProductByIdService } = require('../../services/productServices');

module.exports = async (req: any, res: any) => {
  const { id } = req.params;

  const response = await getProductByIdService(id);

  return res.status(200).json(response);
};
