const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (cashierId: string) => {
  if (!ObjectId.isValid(cashierId)) return null;

  const result = await connection().then((db: any) =>
    db
      .collection('transactions')
      .find({ cashierId: new ObjectId(cashierId) })
      .toArray()
  );

  return result;
};
