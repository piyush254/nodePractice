const mongoose = require('mongoose');

const menuModel = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true 
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ['sweet', 'spicy', 'sour'], 
    required: true
  },
  isDrink: { 
    type: Boolean,
    default: false
  }
});

const MenuItem = mongoose.model('menu', menuModel, 'menu');

module.exports = MenuItem;
