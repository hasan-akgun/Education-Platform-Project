const bcrypt = require('bcrypt');
const pool = require('../config/db')
const { generateToken, generateRefreshToken } = require('../utils/jwtUtils')

exports.login = async (req, res) => {

  const { username, password } = req.body;

  try {


    const userQuery = await pool.query('SELECT id, pass_hash FROM users WHERE username = $1', [username]);
    
    if (userQuery.rows.length === 0) {
      return res.status(401).json({
        message: 'User not found'
      });
    }

    const { id, pass_hash } = userQuery.rows[0];

    const isMatch = await bcrypt.compare(password, pass_hash);
    if(!isMatch){
      return res.status(401).json({
        message: 'Password is wrong'
      })
    }

    const token = generateToken(id);
    const refreshToken = generateRefreshToken(id);

    res.status(200).json({
      success: true,
      token,
      refreshToken,
      user: {
        id: id
      }
    });
    
  } catch (error) {
    console.error('Giriş hatası:', error);
    res.status(500).json({ error: 'Server Error' });
  }
}
