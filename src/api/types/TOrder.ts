import { TCashier } from './TCashier';
import { TCompany } from './TCompany';
import { TDevice } from './TDevice';
import { TItem } from './TItem';
import { TTable } from './TTable';
import { TTicket } from './TTickect';
import { TTransaction } from './TTransactions';

export type TOrder = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  segment: string;
  observation: string;
  company: TCompany;
  customer?: string;
  status:
    | 'open'
    | 'checkout'
    | 'shipping_problem'
    | 'closed'
    | 'canceled'
    | 'rejected'
    | 'shipped'
    | 'delivered'
    | 'invoiced';
  subtotal: number;
  discountAmount: number;
  amount: number;
  shippingAmount: number;
  paidAmount: number;
  changeAmount: number;
  items: TItem[];
  itemsCount: number;
  transactions: TTransaction[];
  code: string;
  device: TDevice;
  cashier: TCashier;
  table: TTable;
  ticket: TTicket;
  deliveryType: 'withdraw' | 'delivery' | 'marketplace';
  paymentType:
    | 'money'
    | 'card'
    | 'debit_card'
    | 'ticket'
    | 'prepaid'
    | 'pix'
    | 'gift';
};
