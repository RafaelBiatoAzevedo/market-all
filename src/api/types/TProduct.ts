import { TAdditional } from './TAdditionals';

export type TProduct = {
  _id: string;
  name: string;
  picture: string;
  additionals: TAdditional[];
};
