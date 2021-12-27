export {};
const { updateCanceledTransaction } = require('../../models/transactionModels');
const { getCashierById } = require('../../models/cashierModels');

module.exports = async (cashierId: string, transactionId: string) => {
  const cashier = await getCashierById(cashierId);

  if (!cashier) {
    throw Error('Not found cashier');
  }

  const result = await updateCanceledTransaction(transactionId);

  if (result === null) throw Error('No canceled transaction');

  return result;
};
