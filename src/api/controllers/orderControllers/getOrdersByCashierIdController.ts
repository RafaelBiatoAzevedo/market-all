export {};
const { getOrdersByCashierIdService } = require('../../services/orderServices');

module.exports = async (req: any, res: any) => {
  const { id } = req.params;

  const response = await getOrdersByCashierIdService(id);

  res.status(200).json(response);
};
