const Person = require("../models/person");
const connectDB = require("../db");



const personCreation =   async (req, res) => {
  try {
    const data = req.body; // get request body
    const newPerson = new Person(data);
    await connectDB();
    const savedPerson = await newPerson.save();
    // console.log("data" , data);
    res.status(201).json({
      success: true,
      message: "Person added successfully",
      data: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding person",
      error: error.message
    });
  }
}


const getPerson = async (req, res) => {
  try {
    await connectDB(); // Connect to DB

    const data = await Person.find({});
    res.status(200).json({
      success: true,
      message: "Persons fetched successfully",
      data: data
    });

  } catch (error) {
    console.error("Error fetching persons:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching persons",
      error: error.message
    });
  }
};



module.exports = { personCreation , getPerson   }