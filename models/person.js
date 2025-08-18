const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["cheif", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type : String 
  },
  salary : {
    type : Number 
  },
  userName: {
    required : true,
    type: String,
  },
  password:{
    required : true,
    type : String 
  }
});

const Person = mongoose.model('Person', personSchema, 'person');


module.exports = Person;
