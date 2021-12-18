import connection from '../connectionMongoDb';

module.exports = async (productName: string) => {
  const result = await connection().then((db: any) =>
    db.collection('products').findOne({ name: productName })
  );

  return result;
};
