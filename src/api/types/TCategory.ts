export type TCategory = {
  _id: string;
  name: string;
  iconUrl: string;
  status: 'active' | 'inactive';
  categoryId: string;
  subcategories: string[];
  createdAt: string;
  updateAt: string;
  segment: string;
  company: string;
};
