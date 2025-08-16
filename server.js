// server.js
const express = require("express");
const path = require("path");
const app = express();
const  Person  = require("./models/person");
const router = require("./routes/route");
const connectDB = require("./db");


const PORT = 8000;
// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use("/", router);

// Start server

// app.post("/person",
//    async (req, res) => {
//   try {
//     const data = req.body; // get request body
//     const newPerson = new Person(data);
//     await connectDB();
//     const savedPerson = await newPerson.save();
//     // console.log("data" , data);
//     res.status(201).json({
//       success: true,
//       message: "Person added successfully",
//       data: data
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error adding person",
//       error: error.message
//     });
//   }
// }
// );


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
