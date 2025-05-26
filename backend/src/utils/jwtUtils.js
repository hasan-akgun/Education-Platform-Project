require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign(
    {id: userId},
    process.env.JWT_SECRET,
    {expiresIn: '30d'}
  );
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } 
  catch (error) {
    console.error('Token verification error:', error.message);
    return null;
  }
};

module.exports = { generateToken, verifyToken };