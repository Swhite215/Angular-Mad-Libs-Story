var app = angular.module("myModule", ['ngRoute', 'ngAnimate']);

//Set up route config.

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/input', {
      controller: "inPut",
      templateUrl: "views/input.html"
    })
    .when('/output', {
      controller: 'outPut',
      templateUrl: "views/output.html"
    })
    .otherwise({ redirectTo: '/input'});

    $locationProvider.hashPrefix('')
});
