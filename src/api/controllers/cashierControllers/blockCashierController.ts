export {};
const { blockCashierService } = require('../../services/cashierServices');

module.exports = async (req: any, res: any) => {
  const { id } = req.params;
  const response = await blockCashierService(id);

  res.status(200).json(response);
};
