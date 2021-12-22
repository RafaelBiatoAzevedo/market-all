const getOrderById = require('./getOrderById');

import { TOrder } from '../../types/TOrder';
import connection from '../connectionMongoDb';

module.exports = async (orderData: TOrder) => {
  const result = await connection().then((db: any) =>
    db.collection('orders').insertOne(orderData)
  );

  if (result.acknowledged) {
    const orderInserted = await getOrderById(result.insertedId);
    return orderInserted;
  }

  return null;
};
