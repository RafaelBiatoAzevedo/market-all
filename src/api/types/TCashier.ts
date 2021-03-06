import { TCompany } from './TCompany';
import { TDevice } from './TDevice';
import { TOrder } from './TOrder';
import { TTransaction } from './TTransactions';

export type TCashier = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  segment: string;
  company: TCompany;
  device: TDevice;
  user: string;
  status: 'open' | 'closed' | 'blocked';
  transactions: TTransaction[];
  orders: TOrder[];
  totalAmountSum: number;
  orderAmountMax: number;
  orderAmountAvg: number;
  moneyPaymentsSum: number;
  moneyChangeSum: number;
  cardPaymentsSum: number;
  ticketPaymentsSum: number;
  pixPaymentsSum: number;
  prepaidPaymentsSum: number;
  giftPaymentsSum: number;
  depositTransactionsSum: number;
  withdrawTransactionsSum: number;
  paymentsTransactionsSum: number;
  moneyReceivedAmount: number;
  cardReceivedAmount: number;
  pixReceivedAmount: number;
  ticketReceivedAmount: number;
  prepaidReceivedAmount: number;
  giftReceivedAmount: number;
  blockedAt: string;
  closedAt: string;
};
