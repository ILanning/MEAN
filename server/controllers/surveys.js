var mongoose = require("mongoose");
var User = mongoose.model("User");
var Survey = mongoose.model("Survey");
var Option = mongoose.model("Option");

module.exports = {
  create : function(req, res){
    var result = { errors : [] };
    if (req.body.o1 == null || req.body.o1 === ""){
      result.errors.push("Option 1: All options must have a value");
    }
    else if (req.body.o1.length < 3){
      result.errors.push("Option 1: All options must have at least 3 characters");
    }
    if (req.body.o2 == null || req.body.o2 === ""){
      result.errors.push("Option 2: All options must have a value");
    }
    else if (req.body.o2.length < 3){
      result.errors.push("Option 2: All options must have at least 3 characters");
    }
    if (req.body.o3 == null || req.body.o3 === ""){
      result.errors.push("Option 3: All options must have a value");
    }
    else if (req.body.o3.length < 3){
      result.errors.push("Option 3: All options must have at least 3 characters");
    }
    if (req.body.o4 == null || req.body.o4 === ""){
      result.errors.push("Option 4: All options must have a value");
    }
    else if (req.body.o4.length < 3){
      result.errors.push("Option 4: All options must have at least 3 characters");
    }
    if (req.body.title == null || req.body.title === ""){
      result.errors.push("Question: Question field must have a value");
    }
    else if (req.body.title.length < 8){
      result.errors.push("Question: Question must have at least 8 characters");
    }
    if(result.errors.length === 0){
      var opt1 = new Option({ title : req.body.o1,  votes : 0 });
      opt1.save(function(err1){
        var opt2 = new Option({ title : req.body.o2,  votes : 0 });
        opt2.save(function(err2){
          var opt3 = new Option({ title : req.body.o3,  votes : 0 });
          opt3.save(function(err3){
            var opt4 = new Option({ title : req.body.o4,  votes : 0 });
            opt4.save(function(err4){
              var newSurvey = new Survey({
                _user : req.body.userID,
                title : req.body.title,
                _options : [opt1._id, opt2._id, opt3._id, opt4._id]
              });
              newSurvey.save(function(err5){
                result.result = newSurvey;
                result.success = true;
                res.json(result);
              });
            });
          });
        });
      });
    }else{
      result.success = false;
      res.json(result);
    }
  },

  show : function(req, res){
    Survey.findById(req.params.id).populate("_options").exec(function(err, survey){
      var result = { result : survey, errors : formatErrors(err), success : true };
      res.json(result);
    });
  },

  index : function(req, res){
    Survey.find({}).populate("_user").exec(function(err, data){
      var result = { result : data, errors : formatErrors(err), success : true };
      res.json(result);
    });
  },

  destroy : function(req, res){
    Survey.remove({_id : req.params.id}, function(err){
      res.json({ errors : formatErrors(err), success : true });
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
  else{
    return prevErr;
  }
  return err;
}
