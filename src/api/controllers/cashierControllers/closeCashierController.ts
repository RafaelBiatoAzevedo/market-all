export {};
const { closeCashierService } = require('../../services/cashierServices');

module.exports = async (req: any, res: any) => {
  const { id } = req.params;
  const { body } = req.body;
  const response = await closeCashierService(id, body);

  res.status(200).json(response);
};
