const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Api running");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
