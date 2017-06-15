angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController", function($scope,localStorageService) {

  if (localStorageService.get("angular-lista")) {
    $scope.todo = localStorageService.get("angular-lista");
  }else {
    $scope.todo = [];
  }

  $scope.$watchCollection('todo', function(newValue,oldValue) {
    localStorageService.set("angular-lista",$scope.todo);
  })

  $scope.addActv = function() {
    $scope.todo.push($scope.newActv);
    $scope.newActv = {};
  }

  $scope.clean = function () {
    $scope.todo = [];
  }
})
