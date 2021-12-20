export {};
const { createTransactionService } = require('../../services/cashierServices');

module.exports = async (req: any, res: any) => {
  const { id } = req.params;
  const { body } = req;
  const response = await createTransactionService(id, 'deposit', body);

  res.status(201).json(response);
};
