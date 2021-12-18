"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
require('dotenv/config');
const SECRET = process.env.SECRET_JWT;
const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
};
const createToken = (payload) => __awaiter(void 0, void 0, void 0, function* () { return jwt.sign(payload, SECRET, jwtConfig); });
const verifyToken = (token) => __awaiter(void 0, void 0, void 0, function* () { return jwt.verify(token, SECRET); });
module.exports = {
    createToken,
    verifyToken,
};
