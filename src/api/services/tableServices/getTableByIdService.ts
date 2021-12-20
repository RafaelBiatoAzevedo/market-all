export {};

const { getTableById } = require('../../models/tableModels');

module.exports = async (ticketId: string) => {
  const result = await getTableById(ticketId);

  if (result === null) throw Error('Not found table');

  return result;
};
