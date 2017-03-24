app.controller("showSurveyController", function($scope, $routeParams, surveyFactory){
  $scope.surveyErrors = [];
  $scope.currSurvey = {};

  $scope.showSurvey = function(){
    surveyFactory.show($routeParams.id, function(data){
      $scope.currSurvey = data.result;
    })
  }
  $scope.showSurvey();
  $scope.vote = function(optionID){
    surveyFactory.vote(optionID, function(){ $scope.showSurvey() });
  }
});
