export type TTable = {
  _id?: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  status: 'available' | 'in-payment' | 'in-use';
};
