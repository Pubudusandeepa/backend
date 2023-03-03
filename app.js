const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "hello Sandeepa Sandeepa",
  });
});

app.listen(4000);
