app.controller("sessionController", function($scope, $location, userFactory){
  $scope.newUser = "";
  $scope.userID = "";
  $scope.username = "";
  $scope.errors = [];

  function check(){
    userFactory.checkStatus(function(data){
      if(data.success){
        $scope.userID = data.result._id;
        $scope.username = data.result.name;
        if($location.url() === "/"){
          $location.url("/dashboard");
        }
      }else{
        $location.url("/");
      }
    });
  }
  check();

  $scope.login = function(){
    $scope.errors = [];
    userFactory.login({ username : $scope.newUser }, function(data){
      if(data.success){
        $scope.userID = data.result._id;
        $scope.username = data.result.name;
        $location.url("/dashboard");
      }
      else{
        $scope.errors = data.errors;
      }
    });
  }

  $scope.logout = function(){
    $scope.errors = [];
    $scope.username = "";
    $scope.userID = "";
    userFactory.logout(function(){});
  }
})
