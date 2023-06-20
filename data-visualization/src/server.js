const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const uri =
  "mongodb+srv://prabhjeetkalsi:kalsi@fitnesstracker.ieduv0e.mongodb.net/?retryWrites=true&w=majority";

const bodyParser = require("body-parser");
app.use(bodyParser.json());

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
}

connect();

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
  res.send({ express: "EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.post("/data", (req, res) => {
  const data = req.body;
  console.log("Received data:", data);
  res.send("Data received successfully!");
});
