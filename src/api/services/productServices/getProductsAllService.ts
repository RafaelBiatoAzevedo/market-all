export {};
const { getProductsAll } = require('../../models/productModels');

module.exports = async () => {
  const result = await getProductsAll();

  return { data: result };
};
