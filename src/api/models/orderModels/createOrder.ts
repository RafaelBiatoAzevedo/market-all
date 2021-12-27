const getOrderById = require('./getOrderById');

import { ObjectId } from 'mongodb';
import { TOrder } from '../../types/TOrder';
import connection from '../connectionMongoDb';

module.exports = async (orderData: TOrder) => {
  const result = await connection().then((db: any) =>
    db
      .collection('orders')
      .insertOne({ ...orderData, _id: new ObjectId(orderData._id) })
  );

  if (result.acknowledged) {
    const orderInserted = await getOrderById(result.insertedId);
    return orderInserted;
  }

  return null;
};
