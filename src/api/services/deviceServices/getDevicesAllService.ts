export {};
const { getDevicesAll } = require('../../models/deviceModels');

module.exports = async () => {
  const result = await getDevicesAll();

  return result;
};
