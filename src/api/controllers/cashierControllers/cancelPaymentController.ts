export {};

const { cancelPaymentService } = require('../../services/cashierServices');

module.exports = async (req: any, res: any) => {
  const { cashierId, id } = req.params;

  const response = await cancelPaymentService(cashierId, id);

  return res.status(200).json(response);
};
