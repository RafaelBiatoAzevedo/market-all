import connection from '../connectionMongoDb';

module.exports = async (ticketId: string) => {
  const result = await connection().then((db: any) =>
    db.collection('orders').findOne({ ticket: ticketId, status: 'open' })
  );

  return result;
};
