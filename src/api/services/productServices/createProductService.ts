export {};
const Joi = require('joi');

const {
  createProduct,
  getProductByName,
} = require('../../models/productModels');

const schema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  segment: Joi.string().required(),
  company: Joi.string().required(),
  sku: Joi.string(),
  description: Joi.string(),
  categoryId: Joi.string(),
  additionalCategories: Joi.array(),
  brand: Joi.string(),
  unitType: Joi.string(),
  picture: Joi.string(),
  dimensions: Joi.string(),
  event: Joi.string(),
});

type TProductData = {
  name: string;
  price: number;
  segment: string;
  company: string;
  sku: string;
  description: string;
  categoryId: string;
  additionalCategories: string[];
  brand: string;
  unitType: string;
  picture: string;
  dimensions: string;
  event: string;
};

module.exports = async (productData: TProductData) => {
  const { name } = productData;
  const { error } = schema.validate(productData);

  if (error) {
    throw Error('Invalid entries. Correct and try again.');
  }

  if (await getProductByName(name)) {
    throw Error('Product already registered');
  }

  const newProduct = {
    ...productData,
    createdAt: new Date(),
    updatedAt: new Date(),
    status: 'active',
  };

  const result = await createProduct(newProduct);

  if (result === null) throw Error('No inserted product');

  return result;
};
