'use strict';
//this is a service used to get the list from the json file to avoid repeating code
//and to reduce the networking burden on the server by getting the json list only once using the catchedData variable instead of getting it each time needed
angular.module('panaderiasApp')
	   .factory('getJSON',function($http){
	   	 var cachedData;
	   	 function getData(callback){
	   	 	if(cachedData){
	   	 		callback(cachedData);
	   	 	}
	   	 	else{
	   	 		$http.get('mock/countries.json').success(function(data){
	   	 			cachedData=data;

	   	 			//future code to preprocess the data

	   	 			callback(data);
	   	 		});
	   	 	}
	   	 }
	   		return {
	   			list: getData,
	   			find: function(name,callback){
	   					getData(function(data){
	   					var country = data.filter(function(entry){
	   						return entry.name===name;
	   					})[0];
	   					callback(country);
	   				});
	   			}

	   		};

	   });
