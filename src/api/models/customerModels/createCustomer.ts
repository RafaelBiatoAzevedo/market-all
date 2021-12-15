import { TCustomerSignup } from '../../types/TCustomerSignup';
const getCustomerById = require('./getCustomerById');

import connection from '../connectionMongoDb';

module.exports = async (customerData: TCustomerSignup) => {
  const result = await connection().then((db: any) =>
    db.collection('customers').insertOne(customerData)
  );

  if (result.acknowledged) {
    const customerInserted = await getCustomerById(result.insertedId);
    return customerInserted;
  }

  return null;
};
