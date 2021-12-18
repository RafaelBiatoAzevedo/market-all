export {};

const { getProductBySku } = require('../../models/productModels');

module.exports = async (productSku: string) => {
  console.log(productSku);
  const result = await getProductBySku(productSku);

  if (result === null) throw Error('Not found product');

  return result;
};
