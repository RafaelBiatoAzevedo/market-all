export {};

const { getTicketsByCompanyId } = require('../../models/ticketModels');

module.exports = async (companyId: string) => {
  const result = await getTicketsByCompanyId(companyId);

  if (result === null) throw Error('Not found tables');

  return result;
};
