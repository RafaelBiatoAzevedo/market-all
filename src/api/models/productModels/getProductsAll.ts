import connection from '../connectionMongoDb';

module.exports = async () => {
  const result = await connection().then((db: any) =>
    db
      .collection('products')
      .aggregate([
        { $match: {} },
        {
          $lookup: {
            from: 'categories',
            localField: 'categoryId',
            foreignField: 'categoryId',
            as: 'category',
          },
        },
        { $unwind: '$category' },
      ])
      .toArray()
  );

  return result;
};
