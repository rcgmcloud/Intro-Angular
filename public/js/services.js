(function() {
  angular
    .module('myApp')
    .service('BookService', function () {
      var books = ['Ender\'s Game', 'Hunger Games', 'Harry Potter'];

      this.getBooks = function (index) {
        return books;
      };

      this.getBook = function (index) {
        if (index < 0 || index >= books.length){
          return null;
        }
        return books[index];
      };

    });

})();
