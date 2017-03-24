app.factory("userFactory", function($http){
  var factory = {};

  factory.login = function(data, callback){
    $http.post("/users/login", data).then(function(result){
      callback(result.data);
    });
  }
  factory.logout = function(callback){
    $http.post("/users/logout").then(function(result){
      callback(result.data);
    });
  }
  factory.checkStatus = function(callback){
    $http.post("/users/check").then(function(result){
      callback(result.data);
    });
  }

  return factory;
});
