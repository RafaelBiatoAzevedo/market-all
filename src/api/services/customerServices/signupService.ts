const Joi = require('joi');
const {
  createCustomer,
  getCustomerByDocument,
  getCustomerByPhone,
  getCustomerByEmail,
} = require('../../models/customerModels');

import { TCustomerSignup } from '../../types/TCustomerSignup';

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  document: Joi.string().required(),
  phoneNumber: Joi.string().required(),
});

const validateEmail = async (email: string) => {
  const patternEmail = /\S+@\S+\.\S+/;
  return patternEmail.test(email);
};

module.exports = async (customerData: TCustomerSignup) => {
  const { email, phoneNumber, document } = customerData;
  const { error } = schema.validate(customerData);

  if (error || !(await validateEmail(email))) {
    throw Error('Invalid entries. Correct and try again.');
  }

  if (
    (await getCustomerByDocument(document)) ||
    (await getCustomerByEmail(email)) ||
    (await getCustomerByPhone(phoneNumber))
  )
    throw Error('Customer already registered');

  const result = await createCustomer(customerData);

  if (result === null) throw Error('No inserted customer');

  delete result.password;
  return result;
};
