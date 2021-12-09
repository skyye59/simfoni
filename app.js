import express from "express";
import path from "path";

const __dirname = path.resolve();
const app = express();

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
