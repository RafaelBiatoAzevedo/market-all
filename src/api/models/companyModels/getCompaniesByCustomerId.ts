const { ObjectId } = require('mongodb');
import connection from '../connectionMongoDb';

module.exports = async (customerId: string) => {
  if (!ObjectId.isValid(customerId)) return null;

  const result = await connection().then((db: any) =>
    db
      .collection('companies')
      .aggregate([
        { $match: { 'customer._id': new ObjectId(customerId) } },
        {
          $lookup: {
            from: 'cashiers',
            let: { companyId: '$_id' },
            pipeline: [
              {
                $match: {
                  $expr: { $eq: ['$company._id', '$$companyId'] },
                  status: 'open',
                },
              },
            ],
            as: 'cashiersOpen',
          },
        },
        { $project: { card: 0 } },
      ])
      .toArray()
  );

  return result;
};
