import { TCard } from '../../types/TCard';
import { TItem } from '../../types/TItem';

const Joi = require('joi');

const { createOrder } = require('../../models/orderModels');
const { getSegmentById } = require('../../models/segmentModels');
const { getCompanyById } = require('../../models/companyModels');
const { getDeviceById } = require('../../models/deviceModels');
const { getCashierById } = require('../../models/cashierModels');

const schema = Joi.object({
  segment: Joi.string().required(),
  company: Joi.string().required(),
  device: Joi.string().required(),
  cashier: Joi.string().required(),
  amount: Joi.number().required(),
  subtotal: Joi.number().required(),
  items: Joi.array().required(),
  customer: Joi.string(),
  discountAmount: Joi.number(),
  observation: Joi.string().empty(''),
  table: Joi.string(),
  ticket: Joi.string(),
});

type TOrderData = {
  segment: string;
  company: string;
  device: string;
  amount: number;
  subtotal: number;
  items: TItem[];
  cashier?: string;
  customer?: string;
  discountAmount?: number;
  observation?: string;
  table?: string;
  ticket?: string;
  card?: TCard;
  paymentType?: string;
};

module.exports = async (orderData: TOrderData) => {
  const { error } = schema.validate(orderData);

  if (error) {
    throw Error('Invalid entries. Correct and try again.');
  }

  const {
    segment: segmentId,
    company: companyId,
    device: deviceId,
    cashier: cashierId,
  } = orderData;

  const segment = await getSegmentById(segmentId);
  const company = await getCompanyById(companyId);
  const device = await getDeviceById(deviceId);
  const cashier = await getCashierById(cashierId);

  if (!company || !device || !segment || !cashier)
    throw Error('Not found company, segment, device or cashier');

  const result = await createOrder({
    ...orderData,
    createdAt: new Date(),
    updatedAt: new Date(),
    status: 'open',
  });

  if (result === null) throw Error('No insert order');

  return result;
};
