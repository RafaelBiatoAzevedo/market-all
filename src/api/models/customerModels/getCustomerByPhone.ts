import connection from '../connectionMongoDb';

module.exports = async (customerPhone: string) => {
  const result = await connection().then((db: any) =>
    db.collection('customers').findOne({ phoneNumber: customerPhone })
  );

  return result;
};
