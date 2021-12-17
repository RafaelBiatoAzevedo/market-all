import { TCategory } from './TCategory';
import { TProduct } from './TProduct';

export type TItem = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  segment: string;
  company: string;
  product: TProduct;
  category: TCategory;
  unitAmount: number;
  discount: number;
  fullAmount: number;
  quantity: number;
  observation: string;
  device: string;
  cashier: string;
  order: string;
  canceled: boolean;
};
