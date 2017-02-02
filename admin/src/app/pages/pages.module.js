/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.sides',
    'BlurAdmin.pages.insert',
    'BlurAdmin.pages.user',
    'BlurAdmin.pages.login',
    'BlurAdmin.pages.signup',
    "ng","ngAnimate","ngAria",
    'ngMaterial',
    'commonServices'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/main/dashboard');

    baSidebarServiceProvider.addStaticItem({

    });
  }

})();
