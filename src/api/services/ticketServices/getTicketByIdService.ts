export {};

const { getTicketById } = require('../../models/ticketModels');

module.exports = async (ticketId: string) => {
  const result = await getTicketById(ticketId);

  if (result === null) throw Error('Not found ticket');

  return result;
};
