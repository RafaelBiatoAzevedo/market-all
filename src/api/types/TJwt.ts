export type TToken = string;

export type TPayload = {
  name: string;
  email: string;
};

export type TJwtConfig = {
  expiresIn: string;
  algorithm: string;
};
