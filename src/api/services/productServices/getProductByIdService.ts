export {};

const { getProductById } = require('../../models/productModels');

module.exports = async (productId: string) => {
  const result = await getProductById(productId);

  if (result === null) throw Error('Not found product');

  return result;
};
