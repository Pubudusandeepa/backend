const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "hello Backeend",
  });
});

app.listen(4000);
