app.controller("surveyController", function($scope, $routeParams, $location, surveyFactory){
  $scope.newSurvey = {};
  $scope.surveyErrors = [];
  $scope.surveys = [];
  $scope.currSurvey = {};
  $scope.tableFilter = "";

  $scope.indexSurveys = function(){
    surveyFactory.index(function(data){ $scope.surveys = data.result; });
  };
  if($location.url() === "/dashboard"){
    $scope.indexSurveys();
  };
  $scope.createSurvey = function(){
    $scope.surveyErrors = [];
    $scope.newSurvey.userID = $scope.userID;
    surveyFactory.create($scope.newSurvey, function(data){
      if(data.success){
        $scope.newSurvey = {};
        $location.url("/dashboard");
      }else{
        $scope.surveyErrors = data.errors;
      }
    });
  };
  $scope.deleteSurvey = function(surveyID){
    surveyFactory.destroy(surveyID, function(data){ $scope.indexSurveys() });
  };
  $scope.formatDate = function(date){
    date = new Date(date);
    var month = date.getMonth();
    var monthString = "";
    switch(month){
      case 0:
        monthString = "Jan";
        break;
      case 1:
        monthString = "Feb";
        break;
      case 2:
        monthString = "Mar";
        break;
      case 3:
        monthString = "Apr";
        break;
      case 4:
        monthString = "May";
        break;
      case 5:
        monthString = "Jun";
        break;
      case 6:
        monthString = "Jul";
        break;
      case 7:
        monthString = "Aug";
        break;
      case 8:
        monthString = "Sep";
        break;
      case 9:
        monthString = "Oct";
        break;
      case 10:
        monthString = "Nov";
        break;
      case 11:
        monthString = "Dec";
        break;
    }
    return `${date.getDate()} ${monthString}, ${date.getFullYear()}`;
  }
});
