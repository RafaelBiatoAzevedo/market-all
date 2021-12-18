export {};

const { getProductBySku } = require('../../models/productModels');
const { getCategoryById } = require('../../models/categoryModels');

module.exports = async (productSku: string) => {
  const result = await getProductById(productSku);

  if (result === null) throw Error('Not found product');

  let category;

  if (result.categoryId) {
    category = getCategoryById(result.categoryId);
  }

  return { ...result, category };
};
