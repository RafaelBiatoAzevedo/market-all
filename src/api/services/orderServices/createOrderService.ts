import { TCard } from '../../types/TCard';
import { TItem } from '../../types/TItem';
import { TTransaction } from '../../types/TTransactions';

const Joi = require('joi');

const { createOrder } = require('../../models/orderModels');
const { getSegmentById } = require('../../models/segmentModels');
const { getCompanyById } = require('../../models/companyModels');
const { getDeviceById } = require('../../models/deviceModels');
const { getCashierById } = require('../../models/cashierModels');
const { updateStatusTicket } = require('../../models/ticketModels');

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
  personsQuantity: Joi.number(),
  tipPercentage: Joi.number(),
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
  personsQuantity?: number;
  table?: string;
  ticket?: string;
  card?: TCard;
  paymentType?: string;
  transactions: TTransaction[];
  paidAmount: number;
  status: string;
  tipPercentage: number;
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

  if (orderData.ticket) {
    const resultUpdateStatusTicket = await updateStatusTicket(
      orderData.ticket,
      'in-use'
    );

    if (!resultUpdateStatusTicket) throw Error('No update status ticket');
  }

  const itemsSync = orderData.items.map((item) => ({
    ...item,
    toSync: false,
  }));

  const result = await createOrder({
    ...orderData,
    items: itemsSync,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  if (result === null) throw Error('No insert order');

  return result;
};
