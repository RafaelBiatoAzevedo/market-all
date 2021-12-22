export {};

const { getOrderByIdService } = require('../../services/orderServices');

module.exports = async (req: any, res: any) => {
  const { id } = req.params;

  const response = await getOrderByIdService(id);

  return res.status(200).json(response);
};
