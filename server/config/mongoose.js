var mongoose = require("mongoose");
var fs = require("fs");
var path = require("path");

mongoose.connect("mongodb://127.0.0.1/MEANSurvey");

var modelPath = path.join(__dirname, "./../models");
fs.readdirSync(modelPath).forEach(function(file){
  if(file.indexOf(".js") > -1){
    require(path.join(modelPath, file));
  }
})
