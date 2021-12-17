export type TDevice = {
  _id: string;
  installationId: string;
  manufacturer: string;
  deviceModel: string;
  serial: string;
  acquirer: string;
  os: string;
  systemVersion: string;
  appVersion: string;
  status: 'active' | 'inactive';
  lastSigninAt: string;
  lastSigninBy: string;
  createdBy: string;
};
