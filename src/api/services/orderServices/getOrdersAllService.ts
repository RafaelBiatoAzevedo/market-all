export {};
const { getOrdersAll } = require('../../models/orderModels');

module.exports = async () => {
  const result = await getOrdersAll();

  return result;
};
