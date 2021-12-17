import connection from '../connectionMongoDb';

module.exports = async () => {
  const result = await connection().then((db: any) =>
    db.collection('cashiers').find({}).toArray()
  );

  return result;
};
