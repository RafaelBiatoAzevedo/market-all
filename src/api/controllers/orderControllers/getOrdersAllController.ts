export {};
const { getOrdersAllService } = require('../../services/orderServices');

module.exports = async (_req: any, res: any) => {
  const response = await getOrdersAllService();

  res.status(200).json(response);
};
