import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();
app.set("view engine", "ejs");

app.listen(3001);

app.get("/", (req, res) => {
  //   res.send("<h1>Hello, world</h1>");
  res.render("index");
});

app.get("/home", (req, res) => {
  //   res.send("<h1>About, world</h1>");
  res.render("home", { root: __dirname });
});

// Use Statics Files (CSS, Images, ETC...)
app.use("/assets", express.static("assets"));
app.use("/styles", express.static("styles"));
app.use("/scripts", express.static("scripts"));
