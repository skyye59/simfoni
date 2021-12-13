import express from "express";
import path from "path";
const mongoose = require("mongoose");
const morgan = require("morgan");

const __dirname = path.resolve();
const app = express();

// Connect to SimfoniDB

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://admin:admin@simfonicluster.91e1d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// Use Static Public Folder
app.use(express.static("public"));

app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  //   res.send("<h1>Hello, world</h1>");
  res.render("index");
});

app.get("/home", (req, res) => {
  //   res.send("<h1>About, world</h1>");
  res.render("home", { root: __dirname });
});
