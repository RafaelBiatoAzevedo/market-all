export {};
const Joi = require('joi');

const {
  createCategory,
  getCategoryByName,
} = require('../../models/categoryModels');

const { getCompanyById } = require('../../models/companyModels');
const { getSegmentById } = require('../../models/segmentModels');

const schema = Joi.object({
  name: Joi.string().required(),
  segment: Joi.string().required(),
  company: Joi.string().required(),
  iconUrl: Joi.string(),
  categoryId: Joi.string(),
});

type TCategoryData = {
  name: string;
  segment: string;
  company: string;
  iconUrl: string;
  categoryId: string;
};

module.exports = async (categoryData: TCategoryData) => {
  const { name } = categoryData;
  const { error } = schema.validate(categoryData);

  if (error) {
    throw Error('Invalid entries. Correct and try again.');
  }

  if (await getCategoryByName(name)) {
    throw Error('Category already registered');
  }

  const { segment: segmentId, company: companyId } = categoryData;

  const company = await getCompanyById(companyId);
  const segment = await getSegmentById(segmentId);

  if (!company || !segment) throw Error('Not found company, segment');

  const newCategory = {
    ...categoryData,
    createdAt: new Date(),
    updatedAt: new Date(),
    status: 'active',
  };

  const result = await createCategory(newCategory);

  if (result === null) throw Error('No inserted category');

  return result;
};
