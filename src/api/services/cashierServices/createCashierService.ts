export {};
const Joi = require('joi');

const { createCashier } = require('../../models/cashierModels');
const { getCompanyById } = require('../../models/companyModels');
const { getDeviceById } = require('../../models/deviceModels');
const { getSegmentById } = require('../../models/segmentModels');

const schema = Joi.object({
  segmentId: Joi.string().required(),
  deviceId: Joi.string().required(),
  companyId: Joi.string().required(),
});

type TCashierData = {
  segmentId: string;
  companyId: string;
  deviceId: string;
};

module.exports = async (cashierData: TCashierData) => {
  const { error } = schema.validate(cashierData);
  const { segmentId, companyId, deviceId } = cashierData;

  if (error) {
    throw Error('Invalid body schema. Correct and try again.');
  }

  const company = await getCompanyById(companyId);
  const device = await getDeviceById(deviceId);
  const segment = await getSegmentById(segmentId);

  if (!company || !device || !segment)
    throw Error('Not found company, segment or device');

  const cashier = {
    createdAt: new Date(),
    updatedAt: new Date(),
    segment: segment,
    company,
    device,
    user: null,
    status: 'open',
    transactions: [],
    orders: [],
    orderAmountMax: 0,
    orderAmountAvg: 0,
    moneyPaymentsSum: 0,
    moneyChangeSum: 0,
    cardPaymentsSum: 0,
    ticketPaymentsSum: 0,
    pixPaymentsSum: 0,
    prepaidPaymentsSum: 0,
    giftPaymentsSum: 0,
    depositTransactionsSum: 0,
    withdrawTransactionsSum: 0,
    paymentsTransactionsSum: 0,
    moneyReceivedAmount: 0,
    cardReceivedAmount: 0,
    pixReceivedAmount: 0,
    ticketReceivedAmount: 0,
    prepaidReceivedAmount: 0,
    giftReceivedAmount: 0,
    blockedAt: null,
    closedAt: null,
  };

  const result = await createCashier(cashier);

  if (result === null) throw Error('No opened cashier');

  return result;
};
