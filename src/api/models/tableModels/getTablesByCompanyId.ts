import connection from '../connectionMongoDb';

module.exports = async (companyId: string) => {
  const result = await connection().then((db: any) =>
    db.collection('tables').find({ company: companyId }).toArray()
  );

  return result;
};
