var app = angular.module("myModule");

app.controller("inPut", function($scope, myFactory, $location) {

  $scope.receiveInfo = function(madData) {
    // console.log(madData);
    myFactory.sendInfo(madData);
    $location.path('/output');
  }


});
