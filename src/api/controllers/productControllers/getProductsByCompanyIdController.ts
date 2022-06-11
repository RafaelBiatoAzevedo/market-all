export {};

const {
  getProductsByCompanyIdService,
} = require('../../services/productServices');

module.exports = async (req: any, res: any) => {
  const { id } = req.params;
  const { query } = req;

  const response = await getProductsByCompanyIdService(id, query);

  return res.status(200).json(response);
};
