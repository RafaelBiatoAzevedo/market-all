export {};
const { createOrderService } = require('../../services/orderServices');

module.exports = async (req: any, res: any) => {
  const body = req.body;
  const response = await createOrderService(body);

  res.status(201).json(response);
};
