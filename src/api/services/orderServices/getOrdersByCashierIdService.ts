export {};

const { getOrdersByCashierId } = require('../../models/orderModels');

module.exports = async (cashierId: string) => {
  const result = await getOrdersByCashierId(cashierId);

  if (result === null) throw Error('Not found cashier');

  return result;
};
