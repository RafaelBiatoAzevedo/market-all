const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (categoryId: string) => {
  if (!ObjectId.isValid(categoryId)) return null;

  const result = await connection().then((db: any) =>
    db
      .collection('categories')
      .aggregate([
        { $match: { _id: new ObjectId(categoryId) } },
        { $addFields: { categoryId: { $toString: '$_id' } } },
        {
          $lookup: {
            from: 'categories',
            localField: 'categoryId',
            foreignField: 'categoryId',
            as: 'subcategories',
          },
        },
        { $project: { categoryId: 0 } },
      ])
      .toArray()
  );

  return result;
};
