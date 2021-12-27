export {};

const { getOrdersByCompanyIdService } = require('../../services/orderServices');

module.exports = async (req: any, res: any) => {
  const { id } = req.params;

  const response = await getOrdersByCompanyIdService(id);

  return res.status(200).json(response);
};
