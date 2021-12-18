import { TDevice } from '../../types/TDevice';
const { ObjectId } = require('mongodb');
const getDeviceById = require('./getDeviceById');

import connection from '../connectionMongoDb';

module.exports = async (deviceId: string, deviceData: TDevice) => {
  if (!ObjectId.isValid(deviceId)) return null;

  const result = await connection().then((db: any) =>
    db
      .collection('devices')
      .updateOne({ _id: new ObjectId(deviceId) }, { $set: deviceData })
  );

  if (result.acknowledged) {
    const deviceUpdated = await getDeviceById(deviceId);
    return deviceUpdated;
  }

  return null;
};
