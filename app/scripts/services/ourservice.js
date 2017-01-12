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
      return esFactory({
        // host: '91.121.142.195:9200',
        host: '127.0.0.1:9200',
        log: 'trace'
      });
  });
