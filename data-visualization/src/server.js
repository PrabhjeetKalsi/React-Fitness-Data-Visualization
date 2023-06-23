const express = require("express");
const mongoose = require("mongoose");
const Data = require("./schema");
const app = express();
const port = process.env.PORT || 5000;
const userName = process.argv[2];
const password = process.argv[3];
const uri = `mongodb+srv://${userName}:${password}@fitnesstracker.ieduv0e.mongodb.net/?retryWrites=true&w=majority`;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log("Connection Failed!!!!");
    console.log(error);
  }
}

connect();

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
  res.send({ express: "EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.post("/data", (req, res) => {
  //Saving Data to MongoDB
  const { data } = req.body;
  const newData = new Data(data);
  newData.save();

  //Logging Received Data
  console.log("Received data:", data);
  res.send("Data received successfully!");
});

app.get("/getdata", (req, res) => {
  Data.find()
    .then((data) => {
      // Array of user documents
      res.send(data);
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
    });
});
