export {};
const { getTablesAllService } = require('../../services/tableServices');

module.exports = async (_req: any, res: any) => {
  const response = await getTablesAllService();

  res.status(200).json(response);
};
