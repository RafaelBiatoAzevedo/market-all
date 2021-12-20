export {};
const { createTablesService } = require('../../services/tableServices');

module.exports = async (req: any, res: any) => {
  const body = req.body;
  const response = await createTablesService(body);

  res.status(201).json(response);
};
