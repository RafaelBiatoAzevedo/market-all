import connection from '../connectionMongoDb';

module.exports = async (productSku: string) => {
  const result = await connection().then((db: any) =>
    db.collection('products').findOne({ sku: productSku })
  );

  return result;
};
