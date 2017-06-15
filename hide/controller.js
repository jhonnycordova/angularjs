angular.module("MyFirstApp", [])
  .controller("FirstController",function($scope,$http) {
    $scope.posts = {};
    $scope.loading = true;

    $http({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
      }).then(function successCallback(data) {
        console.log(data.data);
        $scope.posts = data.data;
        $scope.loading = false;
      }, function errorCallback(response) {
        $scope.loading = false;
      });


  });
