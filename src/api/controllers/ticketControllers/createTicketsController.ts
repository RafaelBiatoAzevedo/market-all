export {};
const { createTicketsService } = require('../../services/ticketServices');

module.exports = async (req: any, res: any) => {
  const body = req.body;
  const response = await createTicketsService(body);

  res.status(201).json(response);
};
