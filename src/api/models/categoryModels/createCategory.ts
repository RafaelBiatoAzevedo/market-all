import { TCategory } from '../../types/TCategory';
const getCategoryById = require('./getCategoryById');

import connection from '../connectionMongoDb';

module.exports = async (categoryData: TCategory) => {
  const result = await connection().then((db: any) =>
    db.collection('categories').insertOne(categoryData)
  );

  if (result.acknowledged) {
    const categoryInserted = await getCategoryById(result.insertedId);
    return categoryInserted;
  }

  return null;
};
