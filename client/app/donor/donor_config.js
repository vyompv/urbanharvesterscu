(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('donor', {
        url: '/donor',
        templateUrl: 'app/donor/donor.html',
        controller: 'DonorCtrl',
        authenticate: true
      })
      .state('reports', {
            url: '/donor/reports',
            templateUrl: 'app/donor/reports.html',
            controller: 'ReportsCtrl',
            authenticate: true
        });
  }

})();