angular.module('geek',['ui.router'])
.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider,$urlRouterProvider,$locationProvider){
        $urlRouterProvider.otherwise('/Home');
        $stateProvider
        .state('Home', {
            url: '',
            templateUrl: './app/Views/home.html',
            controller: 'mainController'
        });
    }]);
