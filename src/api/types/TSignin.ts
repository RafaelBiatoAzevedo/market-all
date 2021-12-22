import { TCustomerSignup } from './TCustomerSignup';

export type TSignin = {
  email: string;
  password: string;
  deviceId: string;
  installationId: string;
  manufacturer: string;
  deviceModel: string;
  serial: string;
  acquirer: TCustomerSignup;
  os: string;
  systemVersion: string;
  appVersion: string;
};
