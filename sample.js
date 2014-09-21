var app = angular.module('myApp', []);
app.controller('addNumbersCtrl',[$scope, function($scope){
  $scope.numVal =  7;
}])
app.service('addNumbers',[$scope,function($scope){
	a= 4;
	b= 5;

	$scope.sumVale = a+b;
}]);