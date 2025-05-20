const validateUserPassword = async (req, res, next) => {

  try {

    const { password } = req.body;

    if (!password || password.length < 8) {
      return res.status(400).json({
        message: 'Password must be at least 8 character'
      });
    }

    if (!/[A-Z]/.test(password)) {
      return res.status(400).json({
        message: 'Password must include at least one upper case character'
      });
    }
    if (!/[0-9]/.test(password)) {
      return res.status(400).json({
        message: 'Password must include at least one number'
      });
    }

    next();
  } 
  catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal server error during password validation'
    });
  }

}

module.exports = validateUserPassword;