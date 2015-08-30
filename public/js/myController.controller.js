(function(){
  angular.module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', 'CharacterVersionFactory', function ($scope, myAppTitle , CharacterVersionFactory ){
      // console.log(APP_VERSION);

      $scope.myModel = "Cello & Violin";
      $scope.title = myAppTitle;
      $scope.characters = CharacterVersionFactory;

  }]);
})();