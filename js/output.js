var app = angular.module("myModule");

app.controller("outPut", function($scope, myFactory) {
  $scope.info = myFactory.getInfo();
  
});
