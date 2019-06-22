const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const pizzaSchema = new Schema({
  pizzaName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

module.exports = Pizza = mongoose.model('pizza', pizzaSchema);