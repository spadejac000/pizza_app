const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors())

// Body parser middleware
app.use(bodyParser.json())

// DB config
const db = require('./config/keys').mongoURI;

// connect to Mongo
mongoose
  .connect(db)
  .then(() => {
    console.log('MongoDB connected...')
  })
  .catch(err => console.log(err))

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on port ${port}`)
});

const pizza = require('./routes/api/pizzas')

// Use Routes
app.use('/api/pizzas', pizza)
