export {};
const Joi = require('joi');
const { updateStatusCashier } = require('../../models/cashierModels');

const schema = Joi.object({
  moneyReceivedAmount: Joi.number().required(),
  cardReceivedAmount: Joi.number().required(),
  pixReceivedAmount: Joi.number().required(),
  ticketReceivedAmount: Joi.number().required(),
  prepaidReceivedAmount: Joi.number().required(),
  giftReceivedAmount: Joi.number().required(),
});

type TCashierData = {
  moneyReceivedAmount: number;
  cardReceivedAmount: number;
  pixReceivedAmount: number;
  ticketReceivedAmount: number;
  prepaidReceivedAmount: number;
  giftReceivedAmount: number;
};

module.exports = async (cashierId: string, cashierData: TCashierData) => {
  const result = await updateStatusCashier(cashierId, 'closed');
  const { error } = schema.validate(cashierData);

  if (error) {
    throw Error('Invalid body schema. Correct and try again.');
  }

  if (result === null) throw Error('No closed cashier');

  return { response: 'Cashier closed' };
};
