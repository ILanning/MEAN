var express = require("express");
var path = require("path");
var bp = require("body-parser");
var session = require("express-session");

var app = express();
app.use(express.static(path.join(__dirname, "./node_modules")));
app.use(express.static(path.join(__dirname, "./client")));
app.use(bp.json());
var sess = {
  secret: 'keyboard cat',
  cookie: {}
}
app.use(session(sess));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000, function(){ console.log("Server listening"); });
