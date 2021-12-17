export {};
const { createCashierService } = require('../../services/cashierServices');

module.exports = async (req: any, res: any) => {
  const body = req.body;
  const response = await createCashierService(body);

  res.status(201).json(response);
};
