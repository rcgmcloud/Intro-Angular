(function(){
  angular.module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', 'CharacterVersionFactory', 'BookService', 'Movies', function ($scope, myAppTitle , CharacterVersionFactory, BookService, Movies ){
      // console.log(APP_VERSION);

      $scope.myModel = "Cello & Violin";
      $scope.title = myAppTitle;
      $scope.characters = CharacterVersionFactory;
      $scope.books = BookService.getBooks();
      $scope.book = BookService.getBook(1);
      $scope.addBook = BookService.addBook;
      $scope.Movies = Movies.query();

  }]);
})();