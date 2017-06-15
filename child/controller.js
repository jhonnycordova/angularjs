angular.module("MyFirstApp", [])
.run(function($rootScope) {
  $rootScope.nombre = "Jhonny";
})
.controller("FirstController",function($scope) {
  $scope.nombre = "Rafael";
})
.controller("ChildController",function($scope) {

});
