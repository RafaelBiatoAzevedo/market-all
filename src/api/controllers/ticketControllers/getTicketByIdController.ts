export {};
const { getTicketByIdService } = require('../../services/ticketServices');

module.exports = async (req: any, res: any) => {
  const { id } = req.params;
  const response = await getTicketByIdService(id);

  res.status(200).json(response);
};
