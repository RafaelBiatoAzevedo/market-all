import connection from '../connectionMongoDb';

module.exports = async (categoryName: string) => {
  const result = await connection().then((db: any) =>
    db.collection('categories').findOne({ name: categoryName })
  );

  return result;
};
