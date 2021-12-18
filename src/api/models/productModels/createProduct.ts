export {};
const getProductById = require('./getProductById');

import { TProduct } from '../../types/TProduct';
import connection from '../connectionMongoDb';

module.exports = async (productData: TProduct) => {
  const result = await connection().then((db: any) =>
    db.collection('products').insertOne(productData)
  );

  if (result.acknowledged) {
    const productInserted = await getProductById(result.insertedId);
    return productInserted;
  }

  return null;
};
