const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (ticketId: string) => {
  if (!ObjectId.isValid(ticketId)) return null;

  const result = await connection().then((db: any) =>
    db.collection('tickets').findOne({ _id: new ObjectId(ticketId) })
  );

  return result;
};
