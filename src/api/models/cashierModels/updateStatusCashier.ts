import connection from '../connectionMongoDb';
const getCashierById = require('./getCashierById');
const { ObjectId } = require('mongodb');

type TStatus = 'closed' | 'blocked';

module.exports = async (cashierId: string, status: TStatus) => {
  if (!ObjectId.isValid(cashierId)) return null;

  let result;

  if (status === 'blocked') {
    result = await connection().then((db: any) =>
      db
        .collection('cashiers')
        .updateOne(
          { _id: new ObjectId(cashierId) },
          { $set: { status, blockedAt: new Date() } }
        )
    );
  } else {
    result = await connection().then((db: any) =>
      db
        .collection('cashiers')
        .updateOne(
          { _id: new ObjectId(cashierId) },
          { $set: { status, closedAt: new Date() } }
        )
    );
  }

  if (result.acknowledged) {
    const deviceUpdated = await getCashierById(cashierId);
    return deviceUpdated;
  }

  return null;
};
