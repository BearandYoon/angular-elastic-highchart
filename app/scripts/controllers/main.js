'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope, OurService, esFactory) {
    $scope.getCurrencyDataFromCurrencylayer = function() {
      // search for documents
      OurService.search({
        index: 'currency_usd',
        // body: {
        //   "query":
        //       {
        //           "match": {
        //               title:"Product1"
        //           }   
        //       },
        // }
      }).then(function (response) {
        console.log('search-', response);
        $scope.hits = response.hits.hits;
      });

      OurService.count({
        index: 'currency_usd'
      }).then(function (response) {
        console.log('count-', response);
        $scope.hits = response.hits.hits;
      });
    };

    $scope.getCurrencyDataFromCurrencylayer();
  });
