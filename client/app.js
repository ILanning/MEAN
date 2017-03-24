var app = angular.module("mainApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.when("/", {templateUrl : "partials/login.html"})
                .when("/survey/:id", {templateUrl : "partials/showPoll.html"})
                .when("/create", {templateUrl : "partials/createPoll.html"})
                .when("/dashboard", {templateUrl : "partials/indexPolls.html"})
                .otherwise({redirectTo : "/"});
})
