'use strict'
let express = require("express");
let app = express();

app.use(express.static(__dirname + "/../client"));

app.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=key',
function(req, res) {
  console.log(res);
  res.json(res.data);
});
app.listen(8181, () =>
  console.log("Listening of 8181"));
