'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')  
  .controller('MainCtrl', function ($scope, $http) {

  	var pendingTask;

    if ($scope.search === undefined) {
      $scope.search = "cute cats";
      fetch();
    }

    $scope.change = function() {
      if (pendingTask) {
        clearTimeout(pendingTask);
      }
      pendingTask = setTimeout(fetch, 800);
    };

    function fetch() {
      $http.get("http://api.giphy.com/v1/gifs/search?q=" + $scope.search + "&rating=r&limit=75&api_key=dc6zaTOxFJmzC")
        .success(function(response) {
          $scope.gifs = response;
        });

    }  	

  });
