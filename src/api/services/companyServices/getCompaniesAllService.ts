export {};
const { getCompaniesAll } = require('../../models/companyModels');

module.exports = async () => {
  const result = await getCompaniesAll();

  return result;
};
