var myApp = angular.module('myApp', []);

myApp.controller('OneController', ['$scope', 'CatService', function($scope, CatService){
  $scope.scopeSpicyTuna = CatService.spicyTuna;
}]);

myApp.controller('TwoController', ['$scope', 'CatService', function($scope, CatService){
  console.log(CatService.grilledCheese);

  $scope.scopeAddToGrilledCheese = CatService.addToGrilledCheese;
  $scope.scopeSpicyTuna = CatService.spicyTuna;
}]);

myApp.factory('CatService', [function(){
  //Private
  var fishStick = 60;

  var spicyTuna = {
    grilledCheese : 10,
    frenchToast: "Here is some data bound!"
  };

  function addToGrilledCheese(){
    spicyTuna.grilledCheese += 1;
    console.log(spicyTuna.grilledCheese);
  }

  //Public
  return {
    spicyTuna : spicyTuna,
    fishStick : fishStick,
    addToGrilledCheese : addToGrilledCheese
  };
}]);
