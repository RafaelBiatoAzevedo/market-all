import { TTicket } from '../../types/TTickect';
import connection from '../connectionMongoDb';

module.exports = async (tickets: TTicket[]) => {
  try {
    await connection().then((db: any) =>
      db.collection('tickets').insertMany(tickets)
    );
  } catch (error) {
    return null;
  }
};
