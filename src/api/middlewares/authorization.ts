const { verifyToken } = require('../utils/jwt');

module.exports = async (req: any, res: any, next: any) => {
  const token = req.headers.authorization;
  if (await verifyToken(token)) return next();
};
