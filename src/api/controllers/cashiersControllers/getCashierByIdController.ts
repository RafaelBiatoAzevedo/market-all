export {};

const { getCashierByIdService } = require('../../services/CashierServices');

module.exports = async (req: any, res: any) => {
  const { id } = req.params;

  const response = await getCashierByIdService(id);

  return res.status(200).json(response);
};
