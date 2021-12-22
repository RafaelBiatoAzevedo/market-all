import { string } from 'joi';
import { TTicket } from '../../types/TTickect';

const { createTickets } = require('../../models/ticketModels');
const Joi = require('joi');

const schema = Joi.object({
  quantity: Joi.number().required().max(1000),
  company: Joi.string().required(),
});

type TTicketsBody = {
  quantity: number;
  company: string;
};

module.exports = async (ticketsBody: TTicketsBody) => {
  const { error } = schema.validate(ticketsBody);

  if (error) {
    throw Error('Invalid entries. Correct and try again.');
  }

  const { quantity, company } = ticketsBody;
  const tickets: TTicket[] = [];

  for (let index = 1; index <= quantity; index += 1) {
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
      company,
    });
  }

  const result = await createTickets(tickets);

  if (result === null) throw Error('No created tickets');

  return { message: 'Tickets created' };
};
