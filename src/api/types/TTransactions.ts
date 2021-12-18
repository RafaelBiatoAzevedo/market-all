export type TTransaction = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  segment: string;
  company: string;
  cashierId: string;
  transactionType: 'payment' | 'deposit' | 'withdraw' | 'change';
  paymentType:
    | 'money'
    | 'card'
    | 'debit_card'
    | 'boleto'
    | 'prepaid'
    | 'pix'
    | 'gift';
  cardType: 'credit' | 'debit' | 'voucher';
  amount: number;
  canceled: boolean;
  status: string;
  device: string;
  order: string;
  observation: string;
};
