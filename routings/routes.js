'use strict';
      angular.module('countriesApp').config(function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'html/oroPan.html',
            controller: 'panaderiasCtrl'
          }).
          when('/:countryName', {
            templateUrl: 'html/countryDetails.html',
            controller: 'countryDetailsController'
          }).
          otherwise({
            redirectTo: '/'
          });
      });
