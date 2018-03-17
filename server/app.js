'use strict'
let express = require("express");
let app = express();
let request = require("request");
const apiKey ="506f009ebefc48939aa39ae78c47e437";

app.use(express.static(__dirname + "/../src"));
app.get('/news', function(req, res) {
  request.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey="+apiKey, (error, response, body) => {
    if (error) {
      return console.dir(error);
    }
    res.json(JSON.parse(body) );
  });
});

//app.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=key',
//function(req, res) {
//  console.log(res);
//  res.json(res.data);
//});
app.listen(8181, () =>
  console.log("Listening of 8181"));
