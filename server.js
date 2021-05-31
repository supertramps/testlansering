const express = require("express");
const port = 5959;
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Deploy is working! 😄");
});

app.listen(port, () => {
  console.log(`Sever is running on ${port}`);
});
