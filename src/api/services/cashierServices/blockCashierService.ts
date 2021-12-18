export {};
const { updateStatusCashier } = require('../../models/cashierModels');

module.exports = async (cashierId: string) => {
  const result = await updateStatusCashier(cashierId, 'blocked');

  if (result === null) throw Error('No blocked cashier');

  return { response: 'Cashier blocked' };
};
