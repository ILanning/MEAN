var mongoose = require("mongoose");

var optionSchema = new mongoose.Schema({
  _survey : { type : mongoose.Schema.Types.ObjectId, ref : "Survey" },
  title : { type : String, required : true, minlength : 3 },
  votes : { type : Number }
}, { timestamps : true });

mongoose.model("Option", optionSchema);
