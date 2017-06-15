angular.module("CustomDirective",[])
  .directive("myAutocomplete",function() {
      function link(scope,element ,attrs) {
          $(element).autocomplete({
              source: scope.$eval(attrs.myAutocomplete),
              select: function(ev,ui) {
                ev.preventDefault();
                if (ui.item) {
                  scope.optionSelected(ui.item.value);
                }
              },
              focus: function(ev,ui) {
                ev.preventDefault();
                $(this).val(ui.item.label);
              }
          });
      }
      return {
        link: link
      }
  })
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
    $scope.repos = [];
    $http({
        method: 'GET',
        url: 'https://api.github.com/users/jhonnycordova/repos'
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
