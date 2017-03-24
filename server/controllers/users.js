var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {
  check : function(req, res){
    if(req.session.userID){
      User.findById(req.session.userID, function(err, data){
        res.json({ result : data, errors : formatErrors(err), success : true });
      });
    }else{
      res.json({ success : false });
    }
  },

  login : function(req, res){
    User.find({ name : req.body.username }, function(err, data){
      if(data.length > 0){
        req.session.userID = data[0]._id;
        req.session.save();
        res.json({ result : data[0], errors : formatErrors(err), success : true });
      }else{
        let newUser = new User({ name : req.body.username });
        newUser.save(function(err){
          result = { result : newUser, errors : formatErrors(err), success : false };
          if(!err){
            result.success = true;
            req.session.userID = newUser._id
            req.session.save();
          }
          res.json(result);
        });
      }
    })
  },

  logout : function(req, res){
    req.session.destroy();
    res.json({ success : true });
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
