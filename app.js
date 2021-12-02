import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  //   res.send("<h1>Hello, world</h1>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //   res.send("<h1>About, world</h1>");
  res.sendFile("./views/about.html", { root: __dirname });
});

app.use("/assets", express.static("assets"));
