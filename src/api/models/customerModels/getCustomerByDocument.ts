import connection from '../connectionMongoDb';

module.exports = async (customerDocument: string) => {
  const result = await connection().then((db: any) =>
    db.collection('customers').findOne({ document: customerDocument })
  );

  return result;
};
