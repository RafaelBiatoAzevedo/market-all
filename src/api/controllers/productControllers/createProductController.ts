export {};
const { createProductService } = require('../../services/productServices');

module.exports = async (req: any, res: any) => {
  const body = req.body;
  const response = await createProductService(body);

  res.status(201).json(response);
};
