import { TJwtConfig, TPayload, TToken } from '../types/TJwt';

const jwt = require('jsonwebtoken');
require('dotenv/config');

const SECRET = process.env.SECRET_JWT;

const jwtConfig: TJwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = async (payload: TPayload) =>
  jwt.sign(payload, SECRET, jwtConfig);

const verifyToken = async (token: TToken) => jwt.verify(token, SECRET);

module.exports = {
  createToken,
  verifyToken,
};
