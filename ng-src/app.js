angular.module("CustomDirective",[])
  .directive("backImg",function() {
      return function(scope, element, attrs) {
        attrs.$observe('backImg',function(value) {
            element.css({
              "background": "url("+value+")",
              "background-size": "cover",
              "background-position": "center"
            });
        });
      }
  })
  .controller("AppController", function($scope,$http) {
    $http({
        method: 'GET',
        url: 'https://api.github.com/users/jhonnycordova/repos'
      }).then(function successCallback(data) {
        $scope.repos = data.data;
      }, function errorCallback(response) {

      });
  })
