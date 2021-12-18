const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (categoryId: string) => {
  if (!ObjectId.isValid(categoryId)) return null;

  const result = await connection().then((db: any) =>
    db
      .collection('categories')
      .find({ _id: new ObjectId(categoryId) })
      .toArray()
  );

  return result;
};
