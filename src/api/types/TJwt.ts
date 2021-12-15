export type TToken = string;

export type TPayload = {
  email: string;
  password: string;
};

export type TJwtConfig = {
  expiresIn: string;
  algorithm: string;
};
