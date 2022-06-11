const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (ticketId: string, status: string) => {
  if (!ObjectId.isValid(ticketId)) return null;

  const result = await connection().then((db: any) =>
    db
      .collection('tickets')
      .updateOne({ _id: new ObjectId(ticketId) }, { $set: { status } })
  );

  return result;
};
