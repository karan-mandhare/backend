require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi this is backend");
});

app.get("/karan", (req, res) => {
  res.send("Hii this is from karan");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
