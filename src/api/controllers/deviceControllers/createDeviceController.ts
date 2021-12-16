export {};
const { createDeviceService } = require('../../services/deviceServices');

module.exports = async (req: any, res: any) => {
  const body = req.body;
  const response = await createDeviceService(body);

  res.status(201).json(response);
};
