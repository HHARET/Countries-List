'use strict';
angular
	.module('countriesApp')
    .controller('panaderiasCtrl', function ($scope,getJSON){
        getJSON.list(function(countries){
          $scope.countriesList=countries;
        });
        $scope.sortField="-population";
      	});
