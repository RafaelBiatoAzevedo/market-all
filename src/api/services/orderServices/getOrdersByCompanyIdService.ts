export {};

const { getOrdersByCompanyId } = require('../../models/orderModels');

module.exports = async (companyId: string) => {
  const result = await getOrdersByCompanyId(companyId);

  if (result === null) throw Error('Not found orders');

  return result;
};
