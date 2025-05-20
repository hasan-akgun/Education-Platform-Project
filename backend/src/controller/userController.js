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

    const result = await pool.query(
      'SELECT EXISTS( SELECT 1 FROM users WHERE username = $1)',
      [username]
    );

    if(result){
      return res.status(409).json({
        message: 'This username already taken'
      })
      
    }

    const hashedPassword = await bcrypt.hash(password, 10);

     await pool.query(
      'INSERT INTO users (username, name, pass_hash) VALUES ($1, $2, $3) RETURNING *',
      [username, name, hashedPassword]
    );

    return res.status(201).json({
      message: 'User created successfully',
    });
  } 
  catch (error) {
    
    console.error('Error creating user:', error);
    return res.status(500).json({
      message: 'Error creating user'
    });
  }
}