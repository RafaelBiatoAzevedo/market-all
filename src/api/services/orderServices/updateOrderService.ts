import { TCard } from '../../types/TCard';
import { TItem } from '../../types/TItem';
import { TTransaction } from '../../types/TTransactions';

const Joi = require('joi');

const { updateOrder } = require('../../models/orderModels');
const { getSegmentById } = require('../../models/segmentModels');
const { getCompanyById } = require('../../models/companyModels');
const { getDeviceById } = require('../../models/deviceModels');
const { getCashierById } = require('../../models/cashierModels');

const schema = Joi.object({
  _id: Joi.string(),
  segment: Joi.string().required(),
  company: Joi.string().required(),
  device: Joi.string().required(),
  cashier: Joi.string().required(),
  amount: Joi.number().required(),
  subtotal: Joi.number().required(),
  items: Joi.array().required(),
  itemsCount: Joi.number().required(),
  transactions: Joi.array().required(),
  customer: Joi.string(),
  discountAmount: Joi.number(),
  observation: Joi.string().empty(''),
  table: Joi.string(),
  ticket: Joi.string(),
  status: Joi.string().required(),
  paidAmount: Joi.number(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
});

type TOrderData = {
  _id: string;
  segment: string;
  company: string;
  device: string;
  amount: number;
  subtotal: number;
  items: TItem[];
  itemsCount: number;
  cashier?: string;
  customer?: string;
  discountAmount?: number;
  observation?: string;
  table?: string;
  ticket?: string;
  card?: TCard;
  paymentType?: string;
  transactions: TTransaction[];
  paidAmount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

module.exports = async (orderId: string, orderData: TOrderData) => {
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

  const result = await updateOrder(orderId, {
    ...orderData,
    updatedAt: new Date(),
  });

  if (result === null) throw Error('No insert order');

  return result;
};
