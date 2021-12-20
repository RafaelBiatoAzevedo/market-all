import { TTable } from '../../types/TTable';
import connection from '../connectionMongoDb';

module.exports = async (tables: TTable[]) => {
  try {
    await connection().then((db: any) =>
      db.collection('tables').insertMany(tables)
    );
  } catch (error) {
    return null;
  }
};
