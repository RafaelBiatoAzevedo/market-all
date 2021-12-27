import connection from '../connectionMongoDb';
const getTransactionById = require('./getTransactionById');
const { ObjectId } = require('mongodb');

module.exports = async (transactionId: string) => {
  if (!ObjectId.isValid(transactionId)) return null;

  const result = await connection().then((db: any) =>
    db
      .collection('transactions')
      .updateOne(
        { _id: new ObjectId(transactionId) },
        { $set: { canceled: true } }
      )
  );

  if (result.acknowledged) {
    const deviceUpdated = await getTransactionById(transactionId);
    return deviceUpdated;
  }

  return null;
};
