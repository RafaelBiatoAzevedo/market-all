const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (cashierId: string) => {
  if (!ObjectId.isValid(cashierId)) return null;

  const TransactionsSum = await connection().then((db: any) =>
    db
      .collection('transactions')
      .aggregate([
        { $match: { cashier: cashierId } },
        { $group: { _id: '$transactionType', total: { $sum: '$amount' } } },
      ])
      .toArray()
  );

  const cashier = await connection().then((db: any) =>
    db
      .collection('cashiers')
      .aggregate([
        { $match: { _id: new ObjectId(cashierId) } },
        { $addFields: { cashierId: { $toString: '$_id' } } },
        {
          $lookup: {
            from: 'transactions',
            localField: 'cashierId',
            foreignField: 'cashier',
            as: 'transactions',
          },
        },
        { $project: { cashierId: 0, 'company.card': 0 } },
      ])
      .toArray()
  );

  type TItem = {
    _id: string;
    total: number;
  };

  const result = {
    ...cashier[0],
    depositTransactionsSum:
      TransactionsSum.find((item: TItem) => item._id === 'deposit')?.total || 0,
    withdrawTransactionsSum:
      TransactionsSum.find((item: TItem) => item._id === 'withdraw')?.total ||
      0,
    paymentsTransactionsSum:
      TransactionsSum.find((item: TItem) => item._id === 'payment')?.total || 0,
  };

  return result;
};
