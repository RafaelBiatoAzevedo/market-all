export {};
const { getDevicesAllService } = require('../../services/deviceServices');

module.exports = async (_req: any, res: any) => {
  const response = await getDevicesAllService();

  res.status(200).json(response);
};
