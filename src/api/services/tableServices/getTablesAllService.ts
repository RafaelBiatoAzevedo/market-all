export {};
const { getTablesAll } = require('../../models/tableModels');

module.exports = async () => {
  const result = await getTablesAll();

  return result;
};
