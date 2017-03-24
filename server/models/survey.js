var mongoose = require("mongoose");

var surveySchema = new mongoose.Schema({
  _user : { type : mongoose.Schema.Types.ObjectId, ref : "User" },
  _options : [{ type : mongoose.Schema.Types.ObjectId, ref : "Option" }],
  title : { type : String, required : true, minlength : 8 }
}, { timestamps : true });

mongoose.model("Survey", surveySchema);
