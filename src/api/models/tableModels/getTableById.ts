const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (tableId: string) => {
  if (!ObjectId.isValid(tableId)) return null;

  const result = await connection().then((db: any) =>
    db.collection('tables').findOne({ _id: new ObjectId(tableId) })
  );

  return result;
};
