import { TTable } from '../../types/TTable';

const { createTables } = require('../../models/tableModels');
const Joi = require('joi');

const schema = Joi.object({
  quantityTables: Joi.number().required().max(1000),
});

type TTablesBody = {
  quantityTables: number;
};

module.exports = async (tablesBody: TTablesBody) => {
  const { error } = schema.validate(tablesBody);

  if (error) {
    throw Error('Invalid entries. Correct and try again.');
  }

  const { quantityTables } = tablesBody;
  const tables: TTable[] = [];

  for (let index = 1; index <= quantityTables; index += 1) {
    const nameTable = (index / 1000)
      .toFixed(3)
      .toString()
      .replace('.', '')
      .slice(1);

    tables.push({
      createdAt: new Date(),
      updatedAt: new Date(),
      name: nameTable,
      status: 'available',
    });
  }

  const result = await createTables(tables);

  if (result === null) throw Error('No created tables');

  return { message: 'Tables created' };
};
