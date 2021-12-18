import connection from '../connectionMongoDb';

module.exports = async () => {
  const productsWithCategoryId = await connection().then((db: any) =>
    db
      .collection('products')
      .aggregate([
        { $match: { categoryId: { $exists: true } } },
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

  const productsWithinCatgeryId = await connection().then((db: any) =>
    db
      .collection('products')
      .find({ categoryId: { $exists: false } })
      .toArray()
  );

  return [...productsWithCategoryId, ...productsWithinCatgeryId];
};
