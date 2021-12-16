import connection from '../connectionMongoDb';

module.exports = async (companyDocument: string) => {
  const result = await connection().then((db: any) =>
    db.collection('companies').findOne({ document: companyDocument })
  );

  return result;
};
