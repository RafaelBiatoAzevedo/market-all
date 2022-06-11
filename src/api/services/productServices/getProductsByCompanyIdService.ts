import { TQueryProducts } from '../../types/TQueryProducts';
const Joi = require('joi');

export {};

const {
  getProductsByCompanyId,
  getProductsByQuery,
} = require('../../models/productModels');

const schema = Joi.object({
  categoryId: Joi.string(),
});

module.exports = async (companyId: string, query?: TQueryProducts) => {
  if (Object.keys(query || {}).length > 0) {
    const { error } = schema.validate(query);

    if (error) {
      throw Error('Invalid entries. Correct and try again.');
    }

    const result = await getProductsByQuery(companyId, query);

    if (result === null) throw Error('Not found products');

    return { data: result };
  }

  const result = await getProductsByCompanyId(companyId);

  if (result === null) throw Error('Not found products');

  return { data: result };
};
