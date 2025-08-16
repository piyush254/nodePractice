const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.models.products || mongoose.model("products", ProductSchema);
