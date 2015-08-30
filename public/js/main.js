(function() {
  var app = angular.module('myApp', ['ngResource', 'ngRoute']);

  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      // .when('/book', {
      //   templateUrl: 'views/books.html',
      //   controller: 'BookController'
      // })
      // .when('/movies', {
      //   templateUrl:'views/movies.html',
      //   controller: 'MovieController'
      // })
      // .when('/other', {
      //   templateUrl:'views/other.html',
      //   controller: 'OtherController'
      // });
        .when('/', {
          templateUrl:'views/default.html',
          controller: 'myController'
        });
  }]);

  app.run(function ($rootScope, APP_VERSION){
    $rootScope.APP_VERSION = APP_VERSION;
  });
})();

