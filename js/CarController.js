/*
 * Define our app as a module called "carForm", which is binded to the
 * defined "ng-app" property in index.html
 */

var carForm = angular.module( 'carForm', []);

/*
 * Define a "CarController" controller for our "carForm" application.
 * Also, think of "$scope" of the JavaScript "this" keyword on
 * steroids because as per the info in
 * http://bit.ly/angular-scope-this, "this" and scope MIGHT be 
 * interchangeable.
 */
carForm.controller( 'CarController', ['$scope', function( $scope ) {
  
  /*
   * Un-comment the console.log statement below to see how the app
   * sees "$scope"
   */
  // console.log( $scope );

  /*
   * Create an empty object called "master" and attach it to our app
   * context via "$scope".
   */
  $scope.master = {};

  /*
   * Create a method called "update()" and" attach it to our app
   * context via "$scope". 
   */
  $scope.update = function( user ) {

    /*
     * When our form is submitted, our app looks for the "user" object
     * that's "created" in index.html and contains all the info added
     * to the inputs. On a submit, the info in "user" gets deep-copied
     * to "$scope.master" via Angular's internal "copy()" method.
     */
    $scope.master = angular.copy( user );

  };

  /*
   * Create a method called "reset()" and" attach it to our app
   * context via "$scope".
   */
  $scope.reset = function( form ) {

    /*
     * When our form is reset, scroll it back its state. Set the
     * overall form state as "not used" with the "$setPristine()
     *" method and set all the input elements as not used with
     * "$setUntouched()".
     */
    if ( form ) {
      form.$setPristine();
      form.$setUntouched();
    }
      
    $scope.user = angular.copy( $scope.master );

  };

  $scope.reset();

}]);