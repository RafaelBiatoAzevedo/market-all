export {};

const { getProductBySku } = require('../../models/productModels');

module.exports = async (productSku: string) => {
  const result = await getProductBySku(productSku);

  if (result === null) throw Error('Not found product');

  return result;
};
