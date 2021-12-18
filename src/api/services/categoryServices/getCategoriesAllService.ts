export {};
const { getCategoriesAll } = require('../../models/categoryModels');

module.exports = async () => {
  const result = await getCategoriesAll();

  return result;
};
