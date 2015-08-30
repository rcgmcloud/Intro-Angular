(function() {
  angular
    .module('myApp')
    .service('BookService', function () {
      var books = [
      {
        title:'Ender\'s Game',
        author: 'Orson Scott Card'
      },
      {
        title:'Hunger Games',
        author: 'Suzanne Collins'
      },
      {
        title: 'Harry Potter',
        author: 'J.K. Rowling'
      }
      ];

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
