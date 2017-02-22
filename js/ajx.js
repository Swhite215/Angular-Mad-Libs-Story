app.factory("ignFactory", function($http) {
  var ignData = {};

  return {
    ign: function(searchCriteria) {
      $http({
        method: "GET",
        url: 'ign api' + searchCriteria.name + '/' + searchCriteria.city + '.json'
      }).then(function successfulCallBack(response) {
        var ignData = response;
        ignData.name = object access to name;
        ignData.whatever = object access to name;
      }, function(error) {
        console.log(error);
      });
    },
    returnResults: function() {
      return ignData
    }
  }
});

var ignData = {};

return {
  ign: function(searchCriteria) {
    $http({
      method: "GET",
      url: 'ign api' + searchCriteria.name + '/' + searchCriteria.city + '.json'
    }).then(function successfulCallBack(response) {
      var ignData = response;
      ignData.name = object access to name;
      ignData.whatever = object access to name;
    }, function(error) {
      console.log(error);
    });
  },
  returnResults: function() {
    return ignData
  }
}

input
object
function name is findIgnData, pass my variable to factory method that takes my info, timeOut so work can be done....
factory method calls http, uses input, splits it apart, adds to query, then returns info
http call
store information
return function
Pull from another controller
