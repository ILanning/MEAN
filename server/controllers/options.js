var mongoose = require("mongoose");
var Option = mongoose.model("Option");

module.exports = {
  vote : function(req, res){
    Option.findById(req.params.id, function(err, data){
      if(data){
        data.votes++;
        data.save(function(err2){
          var result = { errors : formatErrors(err2, formatErrors(err)) };
          result.success = result.errors ? false : true;
          res.json(result);
        });
      } else {
          var result = { errors : formatErrors(err) };
          result.success = false;
          res.json(result);
      }
    });
  }
}

function formatErrors(err, prevErr){
  if(err){
    if(prevErr == null){
      prevErr = [];
    }
    for(var key in err.errors){
      prevErr.push(err.errors[key].message);
    }
    return prevErr;
  }
  return err;
}
