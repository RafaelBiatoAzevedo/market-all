const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (deviceId: string) => {
  if (!ObjectId.isValid(deviceId)) return null;

  const result = await connection().then((db: any) =>
    db.collection('devices').findOne({ _id: new ObjectId(deviceId) })
  );

  return result;
};
