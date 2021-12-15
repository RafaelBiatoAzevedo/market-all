import connection from '../connectionMongoDb';

module.exports = async (customerEmail: string) => {
  const result = await connection().then((db: any) =>
    db.collection('customers').findOne({ email: customerEmail })
  );

  return result;
};
