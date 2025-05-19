const pool = require('../config/db');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  
  if (!req.body || !req.body.username || !req.body.name || !req.body.password) {
    return res.status(400).json({
      message: 'Missing required fields: username, name, and password'
    });
  }

  const {username, name, password} = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO users (username, name, pass_hash) VALUES ($1, $2, $3) RETURNING *',
      [username, name, hashedPassword]
    );

    res.status(201).json({
      message: 'User created successfully',
    });
  } 
  catch (error) {
    
    console.error('Error creating user:', error);
    res.status(500).json({
      message: 'Error creating user'
    });
  }
}