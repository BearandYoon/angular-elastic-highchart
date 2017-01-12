'use strict';

/**
 * @ngdoc service
 * @name testApp.OurService
 * @description
 * # OurService
 * Service in the testApp.
 */
angular.module('testApp')
  .service('OurService', function ($http, $window, esFactory) {

    var baseURL = 'http://apilayer.net/api/timeframe';
    var access_key = '1806e552110e2a0db06c389610afc5a5';
    var start_date = '2016-01-01';
    var end_date = '2016-12-31';
    var currencies = 'USD, EUR';

    function getData() {
      return esFactory({
        host: '91.121.142.195:9200',
        log: 'trace'
        // _index: "currency_eur"
      });
    };

    return ({
      getData: getData
    });
  });
