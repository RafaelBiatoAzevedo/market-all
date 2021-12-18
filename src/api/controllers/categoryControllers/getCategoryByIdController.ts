export {};

const { getCategoryByIdService } = require('../../services/categoryServices');

module.exports = async (req: any, res: any) => {
  const { id } = req.params;

  const response = await getCategoryByIdService(id);

  return res.status(200).json(response);
};
