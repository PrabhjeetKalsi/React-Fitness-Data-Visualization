const express = require("express");
const mongoose = require("mongoose");
const Data = require("./schema/data");
const User = require("./schema/user");
const bcrypt = require("bcryptjs");

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

app.post("/userSignup", async (req, res) => {
  const { user } = req.body;
  const enteredUsername = user.username;
  let save = true;
  await User.findOne({ username: enteredUsername })
    .then((user) => {
      if (user) {
        save = false;
        res.send("User found");
      } else {
        res.send("User not found");
      }
    })
    .catch((err) => console.log(err));
  if (save) {
    const newUser = new User(user);
    newUser.save();
  }
});

app.post("/userLogin", async (req, res) => {
  const { user } = req.body;
  const enteredPassword = user.password;
  const enteredUsername = user.username;
  User.findOne({ username: enteredUsername })
    .then((user) => {
      if (!user) {
        res.send("User not found");
      } else {
        bcrypt.compare(enteredPassword, user.password, (err, isMatch) => {
          if (err) {
            console.error(err);
          } else if (isMatch) {
            res.send("");
          } else {
            res.send("Password is incorrect");
          }
        });
      }
    })
    .catch((err) => console.log(err));
});
