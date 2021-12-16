const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (companyId: string) => {
  if (!ObjectId.isValid(companyId)) return null;

  const result = await connection().then((db: any) =>
    db.collection('companies').findOne({ _id: new ObjectId(companyId) })
  );

  return result;
};
