app.factory("surveyFactory", function($http){
  var factory = {};

  factory.create = function(data, callback){
    $http.post("/surveys", data).then(function(result){
      callback(result.data);
    });
  }

  factory.show = function(id, callback){
    $http.get("/surveys/" + id).then(function(result){
      callback(result.data);
    });
  }

  factory.destroy = function(id, callback){
    $http.delete("/surveys/" + id).then(function(result){
      callback(result.data);
    });
  }

  factory.index = function(callback){
    $http.get("/surveys").then(function(result){
      callback(result.data);
    });
  }

  factory.vote = function(optionID, callback){
    $http.post("/options/" + optionID + "/like").then(function(result){
      callback(result.data);
    });
  }

  return factory;
});
