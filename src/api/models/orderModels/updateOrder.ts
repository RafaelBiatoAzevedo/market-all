const getOrderById = require('./getOrderById');

import { ObjectId } from 'mongodb';
import { TOrder } from '../../types/TOrder';
import connection from '../connectionMongoDb';

module.exports = async (orderId: string, orderData: TOrder) => {
  const result = await connection().then((db: any) =>
    db
      .collection('orders')
      .updateOne(
        { _id: new ObjectId(orderId) },
        { $set: { ...orderData, _id: new ObjectId(orderId) } }
      )
  );

  if (result.acknowledged) {
    const orderUpdated = await getOrderById(orderId);
    return orderUpdated;
  }

  return null;
};
