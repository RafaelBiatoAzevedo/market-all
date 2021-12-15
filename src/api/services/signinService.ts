const models = require('../models');
const Joi = require('joi');
const { createToken } = require('../utils/jwt');

const { getCustomerForSignin } = require('../models/customerModels');

import { TSignin } from '../types/TSignin';

const schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  deviceId: Joi.string(),
  installationId: Joi.string(),
  manufacturer: Joi.string(),
  deviceModel: Joi.string(),
  serial: Joi.string(),
  acquirer: Joi.string(),
  os: Joi.string(),
  systemVersion: Joi.string(),
  appVersion: Joi.string(),
});

const validateEmail = async (email: string) => {
  const patternEmail = /\S+@\S+\.\S+/;
  return patternEmail.test(email);
};

module.exports = async (signinData: TSignin) => {
  const { email, password } = signinData;
  const { error } = schema.validate(signinData);

  if (error || !(await validateEmail(email))) {
    throw Error('Invalid entries. Correct and try again.');
  }

  const result = await models.customerModels.getCustomerForSignin(
    email,
    password
  );

  if (!result) throw Error('Not found customer');

  delete result.password;

  return { ...result, token: await createToken({ email, password }) };
};
