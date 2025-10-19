const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

app.get('/', (req, res) => {
  res.send('<div> <h1> Iyyneswaran </h1> <p> Im a stupid developer </p> </div>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URL).then((con) => {
    console.log('✅ MongoDB connected ' + con.connection.host);
  })
};

connectDatabase();