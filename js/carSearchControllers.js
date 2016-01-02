/*
 * Define our app as an Angular module called "carSearch", which is
 * bound to the defined "ng-app" property in index.html
 */
var carSearchControllers = angular.module( 'carSearchControllers', []);

/*
 * Create all the required controllers, all which load in the data
 * using Angular's $http service.
 *
 * Also, always remember that $scope sorta/kinda is the "this" keyword
 * on steroids. 
 */

 // CONTROLLER FOR SHOWING ALL THE CARS
carSearchControllers.controller( 'SearchListController', [ '$scope', '$http', function ( $scope, $http )  {

  /*
   * When the data's been successfully retrieved, attach it to the
   * "$scope.carData" object
   */
  $http.get( 'js/cars.json' ).success( function( data ) {
    
    $scope.carData = data;

  });

}]);


 /*
  * CONTROLLER FOR SHOWING ALL A SINGLE CAR...is also pulling route
  * info via $routeParams
  */
carSearchControllers.controller( 'SingleCarController', [ '$scope', '$http', '$routeParams', function ( $scope, $http, $routeParams )  {

  /*
   * When the data's been successfully retrieved, attach it to the
   * "$scope.carData" object
   */
  $http.get( 'js/cars.json' ).success( function( data ) {

    $scope.carData = data;
    $scope.whichItem = $routeParams.itemId;

  });

}]);