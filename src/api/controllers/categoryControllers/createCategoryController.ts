export {};
const { createCategoryService } = require('../../services/categoryServices');

module.exports = async (req: any, res: any) => {
  const body = req.body;
  const response = await createCategoryService(body);

  res.status(201).json(response);
};
