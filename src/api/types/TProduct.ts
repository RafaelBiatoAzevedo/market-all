import { TAdditional } from './TAdditionals';

export type TProduct = {
  _id: string;
  name: string;
  price: number;
  segment: string;
  company: string;
  status: 'active' | 'inactive';
  sku: string;
  description: string;
  categoryId: string;
  additionalCategories: string[];
  brand: string;
  unitType: string;
  picture: string;
  dimensions: string;
  event: string;
  pictures: string[];
  additionals: TAdditional[];
  createdAt: string;
  updatedAt: string;
  category: string;
};
