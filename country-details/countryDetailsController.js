'use strict';
angular.module('countriesApp')
	   .controller('countryDetailsCtrl', function($scope,getJSON,$routeParams){
	   	getJSON.find($routeParams.countryName,function(country){
	   		$scope.country=country;
				console.log(country);
	   	});
	   });
