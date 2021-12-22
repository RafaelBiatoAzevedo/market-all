const { getCustomerForSignin } = require('../../models/customerModels');
const {
  createDevice,
  updateLastSigninInDevice,
} = require('../../models/deviceModels');
const { getCompaniesByCustomerId } = require('../../models/companyModels');
const Joi = require('joi');
const { createToken } = require('../../utils/jwt');

import { TSignin } from '../../types/TSignin';

const schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  deviceId: Joi.string(),
  installationId: Joi.string(),
  manufacturer: Joi.string(),
  deviceModel: Joi.string(),
  serial: Joi.string(),
  os: Joi.string(),
  systemVersion: Joi.string(),
  appVersion: Joi.string(),
});

const validateEmail = async (email: string) => {
  const patternEmail = /\S+@\S+\.\S+/;
  return patternEmail.test(email);
};

module.exports = async (signinData: TSignin) => {
  const { email, password, ...deviceData } = signinData;
  const { error } = schema.validate(signinData);

  if (error || !(await validateEmail(email))) {
    throw Error('Invalid entries. Correct and try again.');
  }

  const customer = await getCustomerForSignin(email, password);
  if (!customer) throw Error('Not found customer');
  delete customer.password;

  let device;

  if (deviceData.deviceId) {
    const { deviceId } = deviceData;
    device = await updateLastSigninInDevice(deviceId, {
      status: 'active',
      lastSigninAt: new Date(),
      lastSigninBy: customer._id,
    });
  } else {
    device = await createDevice({
      ...deviceData,
      acquirer: customer,
      status: 'active',
      lastSigninAt: new Date(),
      lastSigninBy: customer._id,
    });
  }

  const companies = await getCompaniesByCustomerId(customer._id);

  if (customer === null || device === null || companies === null)
    throw Error('No signin');

  delete customer.password;
  return {
    token: await createToken({ email, password }),
    ...customer,
    access: [...companies],
    permissions: [],
    device,
  };
};
