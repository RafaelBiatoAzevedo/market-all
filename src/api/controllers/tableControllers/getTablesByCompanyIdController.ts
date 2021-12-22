export {};

const { getTablesByCompanyIdService } = require('../../services/tableServices');

module.exports = async (req: any, res: any) => {
  const { id } = req.params;

  const response = await getTablesByCompanyIdService(id);

  return res.status(200).json(response);
};
