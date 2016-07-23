'use strict';
      angular.module('countriesApp').config(function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'country-list/countryList.template.html',
            controller: 'countryListCtrl'
          }).
          when('/:countryName', {
            templateUrl: 'country-details/countryDetails.template.html',
            controller: 'countryDetailsCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
      });
