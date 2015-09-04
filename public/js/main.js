(function() {
  var app = angular.module('myApp', ['ngResource', 'ngRoute']);

  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/books', {
        templateUrl: 'views/books.html',
        controller: 'BookController'
      })
      .when('/movies', {
        templateUrl:'views/movies.html',
        controller: 'MovieController'
      })
      .when('/other', {
        templateUrl:'views/other.html',
        controller: 'OtherController'
      })
      .when('/', {
        templateUrl:'views/default.html',
        controller: 'myController'
      })
      .otherwise({
        templateUrl:'views/notFound.html'
      });
    }]
  );

  app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider
      .html5Mode([false, false, true]);
    }]
  );

  app.run(function ($rootScope, APP_VERSION){
    $rootScope.APP_VERSION = APP_VERSION;
  });
})();

