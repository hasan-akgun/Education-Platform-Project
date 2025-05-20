const express = require('express');
const app = express();
const config = require('./src/config/config');

const userRoute = require('./src/routes/userRoute');

app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/login', userRoute);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
