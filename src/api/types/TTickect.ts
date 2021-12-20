export type TTicket = {
  _id?: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  status: 'available' | 'in-payment' | 'in-use';
  tableId?: string;
};
