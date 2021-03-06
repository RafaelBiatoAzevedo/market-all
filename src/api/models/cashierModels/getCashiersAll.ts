import connection from '../connectionMongoDb';

module.exports = async () => {
  const result = await connection().then((db: any) =>
    db.collection('cashiers').find({}, { card: 0 }).toArray()
  );

  return result;
};
