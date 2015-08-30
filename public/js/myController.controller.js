(function(){
  angular.module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', function ($scope, myAppTitle ){
      // console.log(APP_VERSION);

      $scope.myModel = "Cello & Violin";
      $scope.title = myAppTitle;
  }]);
})();