export type TTransaction = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  segment: string;
  company: string;
  device: string;
  cashier: string;
  transactionType: 'payment' | 'deposit' | 'withdraw' | 'change';
  paymentType:
    | 'money'
    | 'card'
    | 'debit_card'
    | 'ticket'
    | 'prepaid'
    | 'pix'
    | 'gift';
  cardType: 'credit' | 'debit' | 'voucher';
  amount: number;
  canceled: boolean;
  status: string;
  order: string;
  observation: string;
};
