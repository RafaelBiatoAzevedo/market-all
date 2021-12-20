export {};
const getTransactionById = require('./getTransactionById');

import { TTransaction } from '../../types/TTransactions';
import connection from '../connectionMongoDb';

module.exports = async (transactionData: TTransaction) => {
  const result = await connection().then((db: any) =>
    db.collection('transactions').insertOne(transactionData)
  );

  if (result.acknowledged) {
    const transactionInserted = await getTransactionById(result.insertedId);
    return transactionInserted;
  }

  return null;
};
