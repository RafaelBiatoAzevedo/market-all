export type TTable = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  status: 'available' | 'in-payment' | 'in-use';
};
