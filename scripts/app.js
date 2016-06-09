'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
var states = [
        { name: 'base', state: { abstract: true, url: '', templateUrl: 'views/base.html', data: {text: "Base", visible: false } } },
        { name: 'login', state: { url: '/login', parent: 'base', templateUrl: 'views/login.html', controller: 'LoginCtrl', data: {text: "Login", visible: false } } },
        { name: 'main', state: { url: '/main', parent: 'base', templateUrl: 'views/main.html', controller: 'MainCtrl', data: {text: "Main", visible: false } } },
        { name: 'learn', state: { url: '/learn', parent: 'main', templateUrl: 'views/main/learn.html', data: {text: "Learn", visible: true } } },
        { name: 'wiki', state: { url: '/wiki', parent: 'main', templateUrl: 'views/main/wiki.html', data: {text: "Wiki", visible: true } } },
        { name: 'community', state: { url: '/community', parent: 'main', templateUrl: 'views/main/community.html', data: {text: "Community", visible: true } } },
        // { name: 'reports', state: { url: '/reports', parent: 'dashboard', templateUrl: 'views/dashboard/reports.html', data: {text: "Reports", visible: true } } },
        { name: 'logout', state: { url: '/login', data: {text: "Logout", visible: true }} }
    ];
 
angular.module('yapp', [
                'ui.router',
                'snap',
                'ngAnimate'
            ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('/main', '/main/learn');
            $urlRouterProvider.otherwise('/login');
            
            angular.forEach(states, function (state) {
                $stateProvider.state(state.name, state.state);
            });
        });