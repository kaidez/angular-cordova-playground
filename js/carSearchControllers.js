// Globally define the core controllers for our app

var carSearchControllers = angular.module( 'carSearchControllers', []);

/*
 * Create all the required controllers, all which load in the data
 * using Angular's $http service.
 *
 * Also, always remember that $scope sorta/kinda is the "this" keyword
 * on steroids. 
 */



/* ================================================================= */
/* CONTROLLER FOR SHOWING ALL THE CARS                               */
/* ================================================================= */
carSearchControllers.controller( 'SearchListController', [ '$scope', '$http', function ( $scope, $http )  {

  /*
   * When the data's been successfully retrieved, attach it to the
   * "$scope.carData" object
   */
  $http.get( 'js/cars.json' ).success( function( data ) {

    $scope.carData = data;

  });

}]);



/* ================================================================= */
/* CONTROLLER FOR SHOWINGA SINGLE CAR...is also pulling route info   */
/* via $routeParams and globally sharing it with our app             */
/* ================================================================= */

carSearchControllers.controller( 'SingleCarController', [ '$scope', '$http', '$routeParams', function ( $scope, $http, $routeParams )  {

  /*
   * When the data's been successfully retrieved, attach it to the
   * "$scope.carData" object. Also, create a value called "itemId" and
   * attach it to $routeParams.  Store its value in
   * "$scope.whichItem", which will be used to create links to the
   * single car partials.
   */
  $http.get( 'js/cars.json' ).success( function( data ) {

    $scope.carData = data;
    $scope.whichItem = $routeParams.itemId;

  });

}]);