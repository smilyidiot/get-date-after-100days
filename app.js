const express = require("express");
let addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let res = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(`${res.getDate()}/${res.getMonth() + 1}/${res.getFullYear()}`);
});

module.exports = app;
