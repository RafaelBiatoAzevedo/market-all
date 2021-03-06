export {};

const { getCompanyByIdService } = require('../../services/companyServices');

module.exports = async (req: any, res: any) => {
  const { id } = req.params;

  const response = await getCompanyByIdService(id);

  return res.status(200).json(response);
};
