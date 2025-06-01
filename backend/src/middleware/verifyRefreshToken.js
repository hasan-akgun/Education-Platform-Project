const { verifyToken } = require('../utils/jwtUtils');

const verifyRefreshTokenMiddleware = (req, res, next) => {
  const refreshToken = req.headers['authorization']?.split(' ')[1] || req.cookies?.refreshToken;
  console.log('Authorization header:', req.headers['authorization']);

  if (!refreshToken) {
    return res.status(401).json({ message: 'Access denied, no token provided' });
  }
  console.log('Token received:', refreshToken);
  const decoded = verifyToken(refreshToken);

  req.user = decoded;
  next();
}

module.exports = verifyRefreshTokenMiddleware;