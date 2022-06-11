const { ObjectId } = require('mongodb');
const getOrderById = require('./getOrderById');

import { TOrder } from '../../types/TOrder';
import connection from '../connectionMongoDb';

module.exports = async (orderId: string, orderData: TOrder) => {
  if (!ObjectId.isValid(orderId)) return null;

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
