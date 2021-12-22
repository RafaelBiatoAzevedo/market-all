export {};
const Joi = require('joi');

const { createTransaction } = require('../../models/transactionModels');

const schema = Joi.object({
  segment: Joi.string().required(),
  device: Joi.string().required(),
  company: Joi.string().required(),
  amount: Joi.number().required(),
  order: Joi.string(),
  paymentType: Joi.string(),
  cardType: Joi.string(),
  observation: Joi.string().empty(''),
  status: Joi.string(),
});

type TTransactionData = {
  device: string;
  segment: string;
  company: string;
  amount: number;
  paymentType?: string;
  cardType?: string;
  observation?: string;
  order?: string;
  status?: string;
};

module.exports = async (
  cashierId: string,
  transactionType: string,
  transactionData: TTransactionData
) => {
  const { error } = schema.validate(transactionData);

  if (error) {
    throw Error('Invalid body schema. Correct and try again.');
  }

  if (transactionType === 'payment') {
    if (!transactionData.paymentType)
      throw Error('Not found paymentType in entries');
    if (transactionData.paymentType === 'card') {
      if (!transactionData.cardType)
        throw Error('Not found cardType in entries');
    }
  } else {
    transactionData.paymentType = 'money';
  }

  const newTransaction = {
    ...transactionData,
    amount:
      transactionType === 'withdraw'
        ? -transactionData.amount
        : transactionData.amount,
    createdAt: new Date(),
    updatedAt: new Date(),
    cashier: cashierId,
    transactionType,
    canceled: false,
  };

  const result = await createTransaction(newTransaction);

  if (result === null) throw Error('No inserted transaction in cashier');

  return result;
};
