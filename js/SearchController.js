/*
 * Define our app as an Angular module called "carSearch", which is
 * bound to the defined "ng-app" property in index.html
 */
var carSearch = angular.module( 'carSearch', []);

/*
 * Create a "SearchController" controller for our "carSearch" app and
 * have it load in the data using Angular's $http service.
 *
 * Also, always remember that $scope sorta/kinda is the "this" keyword
 * on steroids. 
 */
carSearch.controller( 'SearchController', [ '$scope', '$http', function ( $scope, $http )  {

  /*
   * When the data's been successfully retrieved, attach it to the
   * "$scope.carData" object
   */
  $http.get( 'js/cars.json' ).success( function( data ){
    $scope.carData = data;
  });

}]);