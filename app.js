const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "data retrieved succesfully!",
    success: true,
  });
});

app.listen(3000, () => {
  console.log("server is up and running!");
});
