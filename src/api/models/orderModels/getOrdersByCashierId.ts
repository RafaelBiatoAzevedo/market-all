import connection from '../connectionMongoDb';

module.exports = async (cashierId: string) => {
  const result = await connection().then((db: any) =>
    db.collection('orders').find({ cashier: cashierId }).toArray()
  );

  return result;
};
