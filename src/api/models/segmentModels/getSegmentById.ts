const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (segmentId: string) => {
  if (!ObjectId.isValid(segmentId)) return null;

  const result = await connection().then((db: any) =>
    db.collection('segments').findOne({ _id: new ObjectId(segmentId) })
  );

  return result;
};
