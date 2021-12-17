import { TAddress } from './TAddress';
import { TCard } from './TCard';
import { TContact } from './TContact';

export type TCompany = {
  _id?: string;
  type: 'private' | 'legal';
  document: string;
  segment: string;
  name: string;
  stateInscription: string;
  addresses: TAddress[];
  contact: TContact[];
  activityBranch: string;
  planType: 'monthly' | 'yearly';
  logoUrl: string;
  planId: string;
  card: TCard;
  createdAt: string;
  updatedAt: string;
};
