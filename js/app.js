angular.module("codeJournal", ['ui.router', 'ngAnimate'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/home') //redirection to 'home'

    // $urlRouterProvider.otherwise('/home') //if user goes to invalid route, redirect

    $stateProvider
    .state('home', {
      controller: 'homeCtrl',
      url: '/home',
      templateUrl: './states/home/home.html'
    }).state('journal', {
      controller: 'journalCtrl',
      url: '/journal',
      templateUrl: './states/journal/journal.html'
    }).state('jquery', {
      controller: 'jqueryCtrl',
      url: '/jquery',
      templateUrl: './states/jquery/jquery.html'
    }).state('misc', {
      controller: 'miscCtrl',
      url: '/misc',
      templateUrl: './states/misc/misc.html'
    }).state('javascript', {
      controller: 'ecmaCtrl',
      url: '/ecma',
      templateUrl: './states/ecma/ecma.html'
    }).state('sass', {
      controller: 'sassCtrl',
      url: '/sass',
      templateUrl: './states/sass/sass.html'
    })
});
//
