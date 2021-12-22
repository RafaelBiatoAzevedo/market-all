export {};

const { getTablesByCompanyId } = require('../../models/tableModels');

module.exports = async (companyId: string) => {
  const result = await getTablesByCompanyId(companyId);

  if (result === null) throw Error('Not found tables');

  return result;
};
