const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "hello pubudu pubudu sandeepa",
  });
});

app.listen(4000);
