angular.module("CustomDirective")
.controller("ReposController", function($scope,$http) {
  $scope.repos = [];
  $http({
      method: 'GET',
      url: 'https://api.github.com/users/twitter/repos'
    }).then(function successCallback(data) {
      $scope.posts = data.data;
      for (var i = data.data.length - 1; i >= 0; i--) {
        var repo = data.data[i];
        $scope.repos.push(repo.name);
      }
    }, function errorCallback(response) {

    });

    $scope.optionSelected = function(data) {
      $scope.$apply(function() {
        $scope.main_repo = data;
      });
    }
})
.controller("RepoController", function($scope, $http, $routeParams) {
  $scope.repo = {};
  console.log($routeParams.name);
  return;
  $http({
      method: 'GET',

      url: 'https://api.github.com/repos/twitter/'+$routeParams.name
    }).then(function successCallback(data) {
      $scope.posts = data.data;
      for (var i = data.data.length - 1; i >= 0; i--) {
        var repo = data.data[i];
        $scope.repos.push(repo.name);
      }
    }, function errorCallback(response) {

    });
})
