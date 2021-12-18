import connection from '../connectionMongoDb';

module.exports = async (productSku: string) => {
  const productWithCategoryId = await connection().then((db: any) =>
    db
      .collection('products')
      .aggregate([
        { $match: { sku: productSku } },
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

  if (productWithCategoryId.length > 0) {
    return productWithCategoryId[0];
  }

  return await connection().then((db: any) =>
    db.collection('products').findOne({ sku: productSku })
  );
};
