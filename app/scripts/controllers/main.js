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
      var client = OurService.getData();
      console.log(client);
      client.search({
        index: 'currency_usd'
      }).then(function (resp) {
        console.log(resp);
      }, function (err) {
        console.log(err);
          // console.trace(err.message);
      });

      client.ping({
        requestTimeout: 30000
      }, function (error) {
        if (error) {
          console.error('elasticsearch cluster is down!');
        } else {
          console.log('All is well');
        }
      });
      // var res = OurService.getData(function(resp) {
      //   console.log('getCurrencyDataFromCurrencylayer-response = ', resp);
      // });

      // console.log('getCurrencyDataFromCurrencylayer-response123 = ', res);

      // OurService.getData().search()
      // .then(function (resp) {
      //   console.log('getCurrencyDataFromCurrencylayer-response = ', resp);
      //   $scope.clusterState = resp;
      //   $scope.error = null;
      // })
      // .catch(function (err) {
      //   console.log('getCurrencyDataFromCurrencylayer-error = ', err);
      //   $scope.clusterState = null;
      //   $scope.error = err;
      //   // if the err is a NoConnections error, then the client was not able to
      //   // connect to elasticsearch. In that case, create a more detailed error
      //   // message
      //   if (err instanceof esFactory.errors.NoConnections) {
      //     $scope.error = new Error('Unable to connect to elasticsearch. ' +
      //       'Make sure that it is running and listening at http://localhost:9200');
      //   }
      // });
    };

    $scope.getCurrencyDataFromCurrencylayer();

    //$scope.chartConfig = {
    //  rangeSelector: {
    //    selected: 1
    //  },
    //
    //  title: {
    //    text: 'USD to EUR exchange rate'
    //  },
    //
    //  yAxis: {
    //    title: {
    //      text: 'Exchange rate'
    //    },
    //    plotLines: [{
    //      value: minRate,
    //      color: 'green',
    //      dashStyle: 'shortdash',
    //      width: 2,
    //      label: {
    //        text: 'Last quarter minimum'
    //      }
    //    }, {
    //      value: maxRate,
    //      color: 'red',
    //      dashStyle: 'shortdash',
    //      width: 2,
    //      label: {
    //        text: 'Last quarter maximum'
    //      }
    //    }]
    //  },
    //
    //  series: [{
    //    name: 'USD to EUR',
    //    data: data,
    //    tooltip: {
    //      valueDecimals: 4
    //    }
    //  }]
    //}
  });
