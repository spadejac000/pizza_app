const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
  pizzaName: {
    type: String,
    required: true
  },
  price: {
    type: Int,
    required: true
  },
  id: {

  },
  user: {
    type: User
  }
})