/*
 * Name the core Angular app "carSearch", which is linked to the
 * "ng-app" value defined on he <html> tag
 */
var carSearch = angular.module( 'carSearch', [
  
  // Allow for routing
  'ngRoute',
  
  // Use controllers listed in the "carSearchControllers" module
  'carSearchControllers' 
]);


/* ============================================ */
/* DEFINE ROUTES WITH ANGULAR "$routeProvider"  */
/* ============================================ */

carSearch.config(['$routeProvider', function( $routeProvider ){
  $routeProvider.
  
  /* =================================== */
  /* "/list" route config: show all cars */
  /* =================================== */
  
  // When going to the "/list" in the browser...
  when('/list', { 
    
    // ...load this partial on the page...
    templateUrl: 'partials/all-cars.html', 
    
    // ...and add content to it with help from "SearchListController"
    controller: 'SearchListController'

  }).


  /* ======================================================= */
  /* "/details/:itemId" route config: route for a single car */
  /* ======================================================= */
  
  // When going to a "/details/:itemId" in the browser...
  when('/details/:itemId', {
    
    // ...load this partial on the page...
    templateUrl: 'partials/single-car.html',

    // ...and add content to it with help from "SingleCarController"
    controller: 'SingleCarController'

  }).

  /* ======================================== */
  /* Default route to go to...which is"/list" */
  /* ======================================== */
  otherwise({ 
    redirectTo: '/list'
  });
}]);