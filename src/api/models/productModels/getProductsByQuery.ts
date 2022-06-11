import { TQueryProducts } from '../../types/TQueryProducts';
import connection from '../connectionMongoDb';

module.exports = async (companyId: string, query: TQueryProducts) => {
  const result = await connection().then((db: any) =>
    db
      .collection('products')
      .find({ company: companyId, categoryId: query.categoryId })
      .toArray()
  );

  return result;
};
