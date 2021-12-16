import { object } from 'joi';
import { TDevice } from '../../types/TDevice';
const { ObjectId } = require('mongodb');
const getDeviceById = require('./getDeviceById');

import connection from '../connectionMongoDb';

module.exports = async (deviceData: TDevice, userId: string) => {
  const { _id } = deviceData;
  if (!ObjectId.isValid(_id)) return null;

  const result = await connection().then((db: any) =>
    db
      .collection('devices')
      .updateOne(
        { _id: new ObjectId(_id) },
        { $set: { lastSigninAt: new Date(), lastSigninBy: userId } }
      )
  );

  if (result.acknowledged) {
    const deviceUpdated = await getDeviceById(_id);
    return deviceUpdated;
  }

  return null;
};
