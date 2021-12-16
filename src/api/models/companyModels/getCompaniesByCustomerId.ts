const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (customerId: string) => {
  if (!ObjectId.isValid(customerId)) return null;

  const result = await connection().then((db: any) =>
    db
      .collection('companies')
      .find({ 'customer._id': new ObjectId(customerId) })
      .toArray()
  );

  return result;
};
