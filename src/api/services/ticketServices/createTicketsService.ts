import { TTicket } from '../../types/TTickect';

const { createTickets } = require('../../models/ticketModels');
const Joi = require('joi');

const schema = Joi.object({
  quantityTickets: Joi.number().required().max(1000),
});

type TTicketsBody = {
  quantityTickets: number;
};

module.exports = async (ticketsBody: TTicketsBody) => {
  const { error } = schema.validate(ticketsBody);

  if (error) {
    throw Error('Invalid entries. Correct and try again.');
  }

  const { quantityTickets } = ticketsBody;
  const tickets: TTicket[] = [];

  for (let index = 1; index <= quantityTickets; index += 1) {
    const nameTicket = (index / 1000)
      .toFixed(3)
      .toString()
      .replace('.', '')
      .slice(1);

    tickets.push({
      createdAt: new Date(),
      updatedAt: new Date(),
      name: nameTicket,
      status: 'available',
    });
  }

  const result = await createTickets(tickets);

  if (result === null) throw Error('No created tickets');

  return { message: 'Tickets created' };
};
