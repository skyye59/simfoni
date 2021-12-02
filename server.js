// This is from the node.js tutorial ignore

const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  // Lodash

  const num = _.random(0, 20);
  console.log(num);

  //   Set Header Content-type
  res.setHeader("Content-Type", "text/html");

  // Send an HTML file
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000");
});
