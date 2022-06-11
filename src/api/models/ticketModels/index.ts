const createTickets = require('./createTickets');
const getTicketsAll = require('./getTicketsAll');
const getTicketById = require('./getTicketById');
const getTicketsByCompanyId = require('./getTicketsByCompanyId');
const updateStatusTicket = require('./updateStatusTicket');

module.exports = {
  createTickets,
  getTicketsAll,
  getTicketById,
  getTicketsByCompanyId,
  updateStatusTicket,
};
