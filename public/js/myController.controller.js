(function(){
  angular.module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', 'CharacterVersionFactory', 'BookService', function ($scope, myAppTitle , CharacterVersionFactory, BookService ){
      // console.log(APP_VERSION);

      $scope.myModel = "Cello & Violin";
      $scope.title = myAppTitle;
      $scope.characters = CharacterVersionFactory;
      $scope.books = BookService.getBooks();
      $scope.book = BookService.getBook(1);
      $scope.addBook = BookService.addBook;

  }]);
})();