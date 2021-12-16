import { TCompany } from '../../types/TCompany';
import { TCustomerSignup } from '../../types/TCustomerSignup';

const getCompanyById = require('./getCompanyById');

import connection from '../connectionMongoDb';

module.exports = async (companyData: TCompany, customer: TCustomerSignup) => {
  const result = await connection().then((db: any) =>
    db.collection('companies').insertOne({ ...companyData, customer })
  );

  if (result.acknowledged) {
    const companyInserted = await getCompanyById(result.insertedId);
    return companyInserted;
  }

  return null;
};
