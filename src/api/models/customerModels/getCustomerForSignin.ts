import connection from '../connectionMongoDb';

module.exports = async (customerEmail: string, customerPassword: string) => {
  const result = await connection().then((db: any) =>
    db
      .collection('customers')
      .findOne({ email: customerEmail, password: customerPassword })
  );

  return result;
};
