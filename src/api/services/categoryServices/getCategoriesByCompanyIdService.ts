export {};

const { getCategoriesByCompanyId } = require('../../models/categoryModels');

module.exports = async (categoryId: string) => {
  const result = await getCategoriesByCompanyId(categoryId);

  if (result === null) throw Error('Not found categories');

  return result;
};
