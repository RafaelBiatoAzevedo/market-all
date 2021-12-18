export {};

const { getCashierById } = require('../../models/cashierModels');

module.exports = async (cashierId: string) => {
  const result = await getCashierById(cashierId);

  if (result === null) throw Error('Not found cashier');

  return result;
};
