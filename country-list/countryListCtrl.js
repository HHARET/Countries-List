'use strict';
angular
	.module('countriesApp')
    .controller('countryListCtrl', function ($scope,getJSON){
        getJSON.list(function(countries){
					  $scope.countriesList=countries;
        });
        $scope.sortField="population";
				});
