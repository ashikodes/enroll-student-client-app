'use strict';

angular
  .module('Enroll')
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil) {

    $scope.toggleLeft = buildToggler('left');

    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
        $mdSidenav(navID).toggle();
          },300);

      return debounceFn;
    }

  })
  .controller('LeftCtrl', function ($scope, $mdSidenav) {
    $scope.close = function () {
      $mdSidenav('left').close();
    };
  });
