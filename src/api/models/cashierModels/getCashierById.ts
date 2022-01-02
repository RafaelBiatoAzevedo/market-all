const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (cashierId: string) => {
  if (!ObjectId.isValid(cashierId)) return null;

  const totalSum = await connection().then((db: any) =>
    db
      .collection('transactions')
      .aggregate([
        { $match: { cashier: cashierId, canceled: false } },
        { $group: { _id: null, total: { $sum: '$amount' } } },
      ])
      .toArray()
  );

  const paymentsSum = await connection().then((db: any) =>
    db
      .collection('transactions')
      .aggregate([
        {
          $match: {
            cashier: cashierId,
            transactionType: 'payment',
            canceled: false,
          },
        },
        { $group: { _id: '$paymentType', total: { $sum: '$amount' } } },
      ])
      .toArray()
  );

  const transactionsSum = await connection().then((db: any) =>
    db
      .collection('transactions')
      .aggregate([
        { $match: { cashier: cashierId, canceled: false } },
        { $group: { _id: '$transactionType', total: { $sum: '$amount' } } },
      ])
      .toArray()
  );

  const ordersAverages = await connection().then((db: any) =>
    db
      .collection('orders')
      .aggregate([
        { $match: { cashier: cashierId, status: { $ne: 'canceled' } } },
        {
          $group: {
            _id: null,
            max: { $max: '$amount' },
            avg: { $avg: '$amount' },
          },
        },
        {
          $project: {
            _id: 0,
            avg: { $round: ['$avg', 2] },
            max: { $round: ['$max', 2] },
          },
        },
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
        {
          $lookup: {
            from: 'orders',
            localField: 'cashierId',
            foreignField: 'cashier',
            as: 'orders',
          },
        },
        { $project: { cashierId: 0 } },
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
      transactionsSum.find((item: TItem) => item._id === 'deposit')?.total || 0,
    withdrawTransactionsSum:
      transactionsSum.find((item: TItem) => item._id === 'withdraw')?.total ||
      0,
    paymentTransactionsSum:
      transactionsSum.find((item: TItem) => item._id === 'payment')?.total || 0,
    moneyPaymentsSum:
      paymentsSum.find((item: TItem) => item._id === 'money')?.total || 0,
    cardPaymentsSum:
      paymentsSum.find((item: TItem) => item._id === 'card')?.total || 0,
    ticketPaymentsSum:
      paymentsSum.find((item: TItem) => item._id === 'ticket')?.total || 0,
    pixPaymentsSum:
      paymentsSum.find((item: TItem) => item._id === 'pix')?.total || 0,
    prepaidPaymentsSum:
      paymentsSum.find((item: TItem) => item._id === 'prepaid')?.total || 0,
    giftPaymentsSum:
      paymentsSum.find((item: TItem) => item._id === 'gift')?.total || 0,
    orderAmountMax: ordersAverages[0]?.max || 0,
    orderAmountAvg: ordersAverages[0]?.avg || 0,
    totalAmountSum: totalSum[0]?.total || 0,
  };

  return result;
};
