'use strict';


var dataModel = {
  projectSeries: "001",
  projectName: ["Blackout 2003",
                "Historic Outline of Typefaces",
                "Packaging for Animal Erasers",
                "The Extendables",
                "The Bold",
                "Dynamic Building Blocks"],
  projectUrl: [],
  projectDescription: ["Placeholder Text."]
};


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrlHome', css: 'css/main.css'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl1', css: 'css/main.css'});
  $routeProvider.when('/view3', {templateUrl: 'partials/partial3.html', controller: 'MyCtrl2', css: 'css/main.css'});
  $routeProvider.when('/view4', {templateUrl: 'partials/partial4.html', controller: 'MyCtrl3', css: 'css/main.css'});
  $routeProvider.when('/view5', {templateUrl: 'partials/partial5.html', controller: 'MyCtrl4', css: 'css/main.css'});
  $routeProvider.when('/view6', {templateUrl: 'partials/partial6.html', controller: 'MyCtrl5', css: 'css/main.css'});
  $routeProvider.when('/view7', {templateUrl: 'partials/partial7.html', controller: 'MyCtrl6', css: 'css/main.css'});
  $routeProvider.when('/view8', {templateUrl: 'partials/partial8.html', controller: 'MyCtrl7', css: 'css/main.css'});
  $routeProvider.when('/view9', {templateUrl: 'partials/partial9.html', controller: 'MyCtrl8', css: 'css/main.css'});
  $routeProvider.when('/view10', {templateUrl: 'partials/partial10.html', controller: 'MyCtrl9', css: 'css/main.css'});
  $routeProvider.when('/view11', {templateUrl: 'partials/partial11.html', controller: 'MyCtrl10', css: 'css/main.css'});
  $routeProvider.when('/view12', {templateUrl: 'partials/partial12.html', controller: 'MyCtrl11', css: 'css/main.css'});
  $routeProvider.when('/view13', {templateUrl: 'partials/partial13.html', controller: 'MyCtrl12', css: 'css/main.css'});
  $routeProvider.when('/view14', {templateUrl: 'partials/partial14.html', controller: 'MyCtrl13', css: 'css/main.css'});
  $routeProvider.when('/view15', {templateUrl: 'partials/partial15.html', controller: 'MyCtrl14', css: 'css/main.css'});
  $routeProvider.when('/view16', {templateUrl: 'partials/partial16.html', controller: 'MyCtrl15', css: 'css/main.css'});
  $routeProvider.when('/view17', {templateUrl: 'partials/partial17.html', controller: 'MyCtrl16', css: 'css/main.css'});
  $routeProvider.when('/view18', {templateUrl: 'partials/partial18.html', controller: 'MyCtrl17', css: 'css/main.css'});
  $routeProvider.when('/view19', {templateUrl: 'partials/partial19.html', controller: 'MyCtrl18', css: 'css/main.css'});
  $routeProvider.when('/view20', {templateUrl: 'partials/partial20.html', controller: 'MyCtrl19', css: 'css/main.css'});
  $routeProvider.when('/view21', {templateUrl: 'partials/partial21.html', controller: 'MyCtrl20', css: 'css/main.css'});
  $routeProvider.when('/view22', {templateUrl: 'partials/partial22.html', controller: 'MyCtrl21', css: 'css/main.css'});
  $routeProvider.when('/view23', {templateUrl: 'partials/partial23.html', controller: 'MyCtrl22', css: 'css/main.css'});
  $routeProvider.when('/view24', {templateUrl: 'partials/partial24.html', controller: 'MyCtrl23', css: 'css/main.css'});
  $routeProvider.when('/view25', {templateUrl: 'partials/partial25.html', controller: 'MyCtrl24', css: 'css/main.css'});
  $routeProvider.when('/view_add', {templateUrl: 'partials/partial_add.html', controller: 'MyCtrl_add', css: 'css/main.css'});
  $routeProvider.otherwise({redirectTo: '/view3'});
}]);
