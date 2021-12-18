const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (productId: string) => {
  if (!ObjectId.isValid(productId)) return null;

  const result = await connection().then((db: any) =>
    db
      .collection('products')
      .aggregate([
        { $match: { _id: new ObjectId(productId) } },
        { $addFields: { objectId: { $toObjectId: '$categoryId' } } },
        {
          $lookup: {
            from: 'categories',
            localField: 'objectId',
            foreignField: '_id',
            as: 'category',
          },
        },
        { $unwind: '$category' },
      ])
      .toArray()
  );

  return result;
};
