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

// Configure the routes
carSearch.config(['$routeProvider', function( $routeProvider ){
  $routeProvider.
  
  // "/list" route config
  when('/list', { // The route for listing all the cars
    templateUrl: 'partials/all-cars.html',
    controller: 'SearchListController'
  }).

  // "/details" route config
  when('/details/:itemId', { // The route for listing one car
    templateUrl: 'partials/single-car.html',
    controller: 'SingleCarController'
  }).

  // config default route...no controllers
  otherwise({ 
    redirectTo: '/'
  });
}]);