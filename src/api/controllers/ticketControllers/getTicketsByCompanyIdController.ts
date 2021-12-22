export {};

const {
  getTicketsByCompanyIdService,
} = require('../../services/ticketServices');

module.exports = async (req: any, res: any) => {
  const { id } = req.params;

  const response = await getTicketsByCompanyIdService(id);

  return res.status(200).json(response);
};
