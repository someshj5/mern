const express = require("express");
const connectDB = require("./config/db");
// const { check, validationResult } = require("express-validator/check");

const app = express();

//Connect Database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Api running");
});

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/post", require("./routes/api/post"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
