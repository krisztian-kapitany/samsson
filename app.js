angular.module('sortApp', [])

.controller('mainController', function($scope, $http) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchEndpoint   = '';     // set the default search/filter term
  
  $scope.endpoints = [];
  
  $http.get('./all_endpoints.json').success(function(data){
        $scope.endpoints = data;
  });

  
});