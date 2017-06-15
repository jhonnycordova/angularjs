angular.module("MyFirstApp", [])
  .controller("FirstController",function($scope,$http) {
    $scope.posts = {};
    $scope.newPost = {};
    $http({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
      }).then(function successCallback(data) {
          //console.log(data.data);
          $scope.posts = data.data;
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

    $scope.addPost = function(){
      $http({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
          title : $scope.newPost.title,
          body: $scope.newPost.body,
          userId: 1
        }
      }).then(function successCallback(data) {
        console.log(data.data);
        $scope.posts.unshift(data.data);
        $scope.newPost = {};
      }, function errorCallback(response) {
        console.log(response);
      });
    }

  });
