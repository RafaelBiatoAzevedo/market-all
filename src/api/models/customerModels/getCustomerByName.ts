import connection from '../connectionMongoDb';

module.exports = async (customerName: string) => {
  const result = await connection().then((db: any) =>
    db.collection('customers').findOne({ name: customerName })
  );

  return result;
};
