export {};

const { getCompanyById } = require('../../models/companyModels');

module.exports = async (companyId: string) => {
  const result = await getCompanyById(companyId);

  if (result === null) throw Error('Not found company');

  delete result.card;
  return result;
};
