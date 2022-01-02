export {};

const { updateOrderService } = require('../../services/orderServices');

module.exports = async (req: any, res: any) => {
  const { id } = req.params;
  const { body } = req;

  const response = await updateOrderService(id, body);

  return res.status(200).json(response);
};
