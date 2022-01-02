export {};

const { getOrderByTicketId } = require('../../models/orderModels');

module.exports = async (ticketId: string) => {
  const result = await getOrderByTicketId(ticketId);

  return result;
};
