const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "data retrieved succesfully!",
    success: true,
  });
});

app.listen(PORT, () => {
  console.log("server is up and running!");
});
