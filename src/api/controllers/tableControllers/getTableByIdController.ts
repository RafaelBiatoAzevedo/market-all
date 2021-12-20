export {};
const { getTableByIdService } = require('../../services/tableServices');

module.exports = async (req: any, res: any) => {
  const { id } = req.params;
  const response = await getTableByIdService(id);

  res.status(200).json(response);
};
