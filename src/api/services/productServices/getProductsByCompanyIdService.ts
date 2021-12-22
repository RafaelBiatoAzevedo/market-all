export {};

const { getProductsByCompanyId } = require('../../models/productModels');

module.exports = async (companyId: string) => {
  const result = await getProductsByCompanyId(companyId);

  if (result === null) throw Error('Not found products');

  return { data: result };
};
