const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (transactionId: string) => {
  if (!ObjectId.isValid(transactionId)) return null;

  const result = await connection().then((db: any) =>
    db.collection('transactions').findOne({ _id: new ObjectId(transactionId) })
  );

  return result;
};
