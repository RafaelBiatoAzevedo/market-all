import connection from '../connectionMongoDb';

module.exports = async () => {
  const result = await connection().then((db: any) =>
    db
      .collection('categories')
      .aggregate([
        { $match: { categoryId: { $exists: false } } },
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
