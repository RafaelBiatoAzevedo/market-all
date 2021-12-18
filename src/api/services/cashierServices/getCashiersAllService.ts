export {};
const { getCashiersAll } = require('../../models/cashierModels');

module.exports = async () => {
  const result = await getCashiersAll();

  return result;
};
