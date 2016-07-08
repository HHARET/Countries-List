'use strict';
angular.module('panaderiasApp')
	   .controller('countryDetailsController', function($scope,getJSON,$routeParams){
	   	getJSON.find($routeParams.countryName,function(country){
	   		$scope.country=country;
	   	});
	   });
    
