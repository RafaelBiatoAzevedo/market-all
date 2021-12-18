export {};

const { getCategoryById } = require('../../models/categoryModels');

module.exports = async (categoryId: string) => {
  const result = await getCategoryById(categoryId);

  if (result === null) throw Error('Not found category');

  return result;
};
