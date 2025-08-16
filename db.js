// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   mongoose.connect("mongodb://0.0.0.0:27017/e-com");
//   const ProductSchema = new mongoose.Schema({});
//   const ProductModel = mongoose.model("products", ProductSchema);
//   const data = await ProductModel.find({});
//   console.log(data);
// };


// module.exports = connectDB;


const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(config.get("mongodb.uri"));
    console.log("connected to mpngodb");
  }
};



mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("⚠️ MongoDB disconnected");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err.message);
});
module.exports = connectDB;

