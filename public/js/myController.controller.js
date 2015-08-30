(function(){
  angular.module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', function ($scope, myAppTitle){
      $scope.myModel = "Cello & Violin";
      $scope.title = myAppTitle;
  }]);
})();