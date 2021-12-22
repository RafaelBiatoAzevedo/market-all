export {};

const { getOrderById } = require('../../models/orderModels');

module.exports = async (orderId: string) => {
  const result = await getOrderById(orderId);

  if (result === null) throw Error('Not found order');

  return result;
};
