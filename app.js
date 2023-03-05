const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(re, res){

  var today = new Date();
  var day = today.getDate();

  if (day === 1 || day === 6){
    res.sendFile(__dirname + "/weekday.html");
  }
  else
  {
    res.sendFile(__dirname + "/weekend.html");
  }
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
