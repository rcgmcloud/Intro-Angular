(function(){
  angular.module('myApp')
    .controller('myController', ['$scope', function($scope){
    $scope.test = "Hello";
  }]);
})();