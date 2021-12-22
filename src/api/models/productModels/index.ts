const createProduct = require('./createProduct');
const getProductById = require('./getProductById');
const getProductBySku = require('./getProductBySku');
const getProductsAll = require('./getProductsAll');
const getProductByName = require('./getProductByName');
const getProductsByCompanyId = require('./getProductsByCompanyId');

module.exports = {
  createProduct,
  getProductById,
  getProductBySku,
  getProductsAll,
  getProductByName,
  getProductsByCompanyId,
};
