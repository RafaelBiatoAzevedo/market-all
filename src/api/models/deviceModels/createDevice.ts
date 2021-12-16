import { TDevice } from '../../types/TDevice';
const getDeviceById = require('./getDeviceById');

import connection from '../connectionMongoDb';

module.exports = async (deviceData: TDevice) => {
  const result = await connection().then((db: any) =>
    db.collection('devices').insertOne(deviceData)
  );

  if (result.acknowledged) {
    const deviceInserted = await getDeviceById(result.insertedId);
    return deviceInserted;
  }

  return null;
};
