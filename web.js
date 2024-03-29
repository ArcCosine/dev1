const express = require("express");
const logfmt = require("logfmt");
const app = express();

app.use(logfmt.requestLogger());
app.get('/', function(req,res){
  res.send("Hello!");
});

const port = process.env.PORT || 5000;
app.listen(port,function(){
  console.log("Listening on " + port);
});
