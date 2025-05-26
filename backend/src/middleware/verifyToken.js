const { verifyToken } = require('../utils/jwtUtils');

const verifyTokenMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1] || req.cookies?.token;
  console.log('Authorization header:', req.headers['authorization']);

  if (!token) {
    return res.status(401).json({ message: 'Access denied, no token provided' });
  }
  console.log('Token received:', token);
  const decoded = verifyToken(token);

  req.user = decoded;
  next();
}

module.exports = verifyTokenMiddleware;