var app = angular.module("myModule");

app.factory("myFactory", function() {
  var obj = {};

  return {
    sendInfo: function(madInfo) {
      obj = madInfo;
    },
    getInfo: function() {
      return obj;
    }
  }
});
