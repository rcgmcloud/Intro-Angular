(function() {
  angular
    .module('myApp')
    .filter('beforeYearFilter', function () {
      return function (movies, year){
        return movies.filter(function(movie) {
          return movie.year < year;
        });
      };
    });
})();