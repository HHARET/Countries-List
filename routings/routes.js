'use strict';
      angular.module('countriesApp').config(function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'country-list/countryList.template.html',
            controller: 'countryListCtrl'
          }).
          when('/:countryName', {
            templateUrl: 'html/countryDetails.html',
            controller: 'countryDetailsController'
          }).
          otherwise({
            redirectTo: '/'
          });
      });
