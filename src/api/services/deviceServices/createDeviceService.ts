import { TDevice } from '../../types/TDevice';

const { createDevice } = require('../../models/deviceModels');

module.exports = async (deviceData: TDevice, userId: string) => {
  const result = await createDevice({
    ...deviceData,
    status: 'active',
    lastSigninAt: new Date(),
    lastSigninBy: userId,
    createdBy: '',
  });

  if (result === null) throw Error('No insert device');

  return result;
};
