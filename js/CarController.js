/*
 * Define our app as a module called "carForm", which is binded to the
 * defined "ng-app" property in index.html
 */

var carForm = angular.module( 'carForm', []);

/*
 * Define a "CarController" controller for our "carForm" application.
 * Also, think of "$scope" of the JavaScript "this" keyword on
 * steroids.
 */
carForm.controller( 'CarController', ['$scope', function( $scope ) {
  
  /*
   * Un-comment the console.log statement below to see how the app
   * sees "$scope"
   */
  // console.log( $scope );

  /*
   * Create an empty object called "master" and attach it to our app
   * context
   */
  $scope.master = {};

  $scope.update = function( user ) {
    $scope.master = angular.copy( user );
  };

  $scope.reset = function( form ) {
    if ( form ) {
      form.$setPristine();
      form.$setUntouched();
    }
      
    $scope.user = angular.copy( $scope.master );

  };

  $scope.reset();

}]);