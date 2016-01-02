# NOTES

* Angular likes to fail silently sometimes...make sure that your quotes are closed, that you don't use quotes where you don't need them, etc.

* excellent templating engine with `{{ }}` embedded in the HTML

* uses "directives", which are commands in HTML that tell Angular to do stuff at a certain place on the page.  They're created using `ng-`.

* has two-way binding...GREAT for forms!!

* you can filter with directives.

* Angular has modules, routes and controllers.

* core Angular code should go at the top.

* `ng-app` does NOT always have to go in `<html>`...it CAN just go to certain spots of your code.

* Organize modules with controllers.

* remember: for image sources, use `img ng-src` and not `img src`.

* a "service" is a small piece of code that takes care of common tasks.

* `$http` can mess up when using minified Angular. Make sure to pass it and $scope properly (see Ray's core Angular course).

* `ng-model` is a directive that binds form elements to a property on the scope using `NgModelController`, which is created and exposed by this directive.

* `ng-model` can used more than once and bound to elements via filters.

* use routes to manage loading in the partial views (read about `ngRoute`).

* `ngRoute` uses deep-linking.

* you need `angular-route.js` for Angular routing.

* routes and multiple partials ~usually~ need multiple controllers

* Controller-naming signature: usually named as a class and written in camelcase

* `$routeParams` hold info about that data in your object/whatever & use it to get the routes working.

* Angular routes need views to work properly.

## Angular Form Validation

* common form attributes are added as directives.

* research any classes that get injected when the data changes, particularly the form related stuff (.ng-invalid, .ng-pristine, etc.)