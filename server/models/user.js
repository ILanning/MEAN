var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  _survey : { type : mongoose.Schema.Types.ObjectId, ref : "Survey" },
  name : { type : String, required : true }
}, { timestamps : true });

mongoose.model("User", userSchema);
