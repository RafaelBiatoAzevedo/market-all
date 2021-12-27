export {};
const getTransactionById = require('./getTransactionById');

import { ObjectId } from 'mongodb';
import { TTransaction } from '../../types/TTransactions';
import connection from '../connectionMongoDb';

module.exports = async (transactionData: TTransaction) => {
  const result = await connection().then((db: any) =>
    db
      .collection('transactions')
      .insertOne({ ...transactionData, _id: new ObjectId(transactionData._id) })
  );

  if (result.acknowledged) {
    const transactionInserted = await getTransactionById(result.insertedId);
    return transactionInserted;
  }

  return null;
};
