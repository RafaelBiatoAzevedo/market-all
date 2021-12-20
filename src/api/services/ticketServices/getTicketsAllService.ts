export {};
const { getTicketsAll } = require('../../models/ticketModels');

module.exports = async () => {
  const result = await getTicketsAll();

  return result;
};
