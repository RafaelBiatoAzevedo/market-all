const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (cashierId: string) => {
  if (!ObjectId.isValid(cashierId)) return null;

  const result = await connection().then((db: any) =>
    db.collection('cashiers').findOne({ _id: new ObjectId(cashierId) })
  );

  return result;
};
