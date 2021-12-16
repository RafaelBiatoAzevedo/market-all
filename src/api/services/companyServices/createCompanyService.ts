import { TCompany } from '../../types/TCompany';
const Joi = require('joi');

const {
  createCompany,
  getCompanyByDocument,
} = require('../../models/companyModels');

const { getCustomerByEmail } = require('../../models/customerModels');

const schema = Joi.object({
  type: Joi.string().required(),
  document: Joi.string().required(),
  name: Joi.string().required(),
  stateInscription: Joi.string().required(),
  addresses: Joi.array().required(),
  contact: Joi.array().required(),
  activityBranch: Joi.string(),
  planType: Joi.string(),
  logoUrl: Joi.string(),
  planId: Joi.string(),
  card: Joi.object(),
});

module.exports = async (companyData: TCompany, email: string) => {
  const { document } = companyData;
  const { error } = schema.validate(companyData);

  if (error) {
    throw Error('Invalid entries. Correct and try again.');
  }

  if (await getCompanyByDocument(document)) {
    throw Error('Company already registered');
  }

  const customer = await getCustomerByEmail(email);
  delete customer.password;

  const result = await createCompany(
    {
      ...companyData,
      segment: '61ba9cc11c3ae0ca5999d960',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    customer
  );

  if (result === null) throw Error('No insert company');

  delete result.card;
  return result;
};
