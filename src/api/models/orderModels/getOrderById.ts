const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (orderId: string) => {
  if (!ObjectId.isValid(orderId)) return null;

  const result = await connection().then((db: any) =>
    db.collection('orders').findOne({ _id: new ObjectId(orderId) })
  );

  return result;
};
