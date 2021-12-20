export {};
const { getTicketsAllService } = require('../../services/ticketServices');

module.exports = async (_req: any, res: any) => {
  const response = await getTicketsAllService();

  res.status(200).json(response);
};
