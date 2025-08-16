const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const connectDB = require("../db");

const { personCreation , getPerson  } = require ("../Controllers/UserController")
const { menuAddition  } = require ("../Controllers/MenuController")
const ProductSchema = new mongoose.Schema({}, { strict: false });
const ProductModel = mongoose.models.products || mongoose.model("products", ProductSchema);


const UserSchema = new mongoose.Schema({}, { strict: false });
const UserModel = mongoose.models.MASTER_USERS || mongoose.model("master_users", UserSchema);


// const UserSchema = new mongoose.Schema({}, { strict: false, collection: "MASTER_USERS" });
// const UserModel = mongoose.models.MASTER_USERS || mongoose.model("MASTER_USERS", UserSchema);


router.get("/", async (req, res) => {
  await connectDB();
  const data = await ProductModel.find({});
  res.json(data);
})
router.get("/users", async (req, res) => {
  await connectDB();
  const data = await UserModel.find({});
  res.json(data);
}
)
router.post("/person", personCreation )
router.get("/getPerson", getPerson )

// menu

router.post("/menuAddition", menuAddition);

// router.use("/", (req, res)=>{
//   res.status(200).json({ success : true  });
// });
module.exports = router;