import { TCashier } from '../../types/TCashier';
const getCashierById = require('./getCashierById');

import connection from '../connectionMongoDb';

module.exports = async (cashierData: TCashier) => {
  const result = await connection().then((db: any) =>
    db.collection('cashiers').insertOne(cashierData)
  );

  if (result.acknowledged) {
    const cashierInserted = await getCashierById(result.insertedId);
    return cashierInserted;
  }

  return null;
};
