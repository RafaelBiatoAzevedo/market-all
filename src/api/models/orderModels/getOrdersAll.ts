import connection from '../connectionMongoDb';

module.exports = async () => {
  const result = await connection().then((db: any) =>
    db.collection('orders').find({}).toArray()
  );

  return result;
};
