'use strict';
angular
	.module('countriesApp')
    .controller('panaderiasCtrl', function ($scope,getJSON){
        getJSON.list(function(countries){
          $scope.entradasOroPan=countries;
        });
        $scope.sortField="-population";
      	});
