import connection from '../connectionMongoDb';
const getCashierById = require('./getCashierById');
const { ObjectId } = require('mongodb');

type TStatus = 'open' | 'closed' | 'blocked';

module.exports = async (cashierId: string, status: TStatus) => {
  if (!ObjectId.isValid(cashierId)) return null;

  const result = await connection().then((db: any) =>
    db
      .collection('cashiers')
      .updateOne({ _id: new ObjectId(cashierId) }, { $set: { status } })
  );

  if (result.acknowledged) {
    const deviceUpdated = await getCashierById(cashierId);
    return deviceUpdated;
  }

  return null;
};
