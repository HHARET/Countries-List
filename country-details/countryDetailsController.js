'use strict';
angular.module('countriesApp')
	   .controller('countryDetailsCtrl', function($scope,$routeParams,getJSON){
	   	getJSON.find($routeParams.countryName,function(country){
	   		$scope.country=country;
	   	});
	   });
