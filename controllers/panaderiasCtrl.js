'use strict';
angular
	.module('panaderiasApp')
    .controller('panaderiasCtrl', function ($scope,getJSON){
        getJSON.list(function(countries){   
          $scope.entradasOroPan=countries;
        });
        $scope.sortField="-population";
      	});
  