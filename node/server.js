const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

// viewed at http://localhost:8080
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/login.html"));
});

app.listen(8080);
