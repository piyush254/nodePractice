// server.js
const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const path = require("path");
const app = express();
const router = require("./routes/route");
const connectDB = require("./db");


const PORT = 8000;
const logRequest = (req, res, next) => {
  const now = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  console.log(`[${now}] ${req.method} ${req.url}`);
  next();
};


app.use(express.json());

app.use(logRequest);


// app.use(new LocalStrategy (async (useName , password  , done) => {
//       try{

//       }
//       catch(err){
//         res.status(500).json({msgg : err})
//       }
  
// }))



// Use routes
app.use("/",router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
