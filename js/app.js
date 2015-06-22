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
  projectDescription: ["This poster shows how the Blackout of the United States and South Canada happened in 2003. The narrative information design contains from basic knowledge of electricity delivery process to what exact events happened during the day. I approach information architecture in a way that it focuses on typographical order and hierarchy, which leads to proper readability and story-telling, specifically for this poster, I want to introduce the basics of electronics and the context of the event before the event timeline, but not in a demanding fashion, meaning you can go slightly differently on your routine to go through the information, depending on how you interact with the flow of ideas presented.",
                       "I approach information architecture in a way that it focuses on typographical order and hierarchy, which leads to proper readability and story-telling, specifically for this poster, I want to introduce the basics of electronics and the context of the event before the event timeline, but not in a demanding fashion, meaning you can go slightly differently on your routine to go through the information, depending on how you interact with the flow of ideas presented.",
                       "This packaging structure is created to force a relationship between toy packaging and the architecture Robie House by Frank Lloyd Wright. As we know, the first floor of the ceiling is particularly low and compressed, and there is a sense of release beginning in the wide open space at the second floor. The contrast between close and open state of the packaging is the main focus and goal.",
                       "For today’s kids, high-tech devices are made rather accessible to them. Video games, Apps, and other screen-based content are mentally loud and visually overwhelming, which is causing kids to ignore the physical world and supposedly engaging objects, yet physical toys are not often built cross-platform in order to let children not only carry them around, but also be aware of the advancement of today’s technology. I wanted to re-picture a toy world that was partially physical, partially digital and that acts as a platform for media and itself in a poetic fashion. The toy may create its living environment on its own. AR seems like a proper way of giving physical objects an identity and set of behaviors in new and existing media worlds.",
                       "This BFA project is not only a celebration of my graduation, as BOLD is an ongoing experiment led by a series of paper typeface development tracing the idea of shape & color variation of forms, media combination, and cultural encounter/blending. The experiment contains ideas on language/wording, self/identity, and cultural differences of software using and exploration. The project itself acts as one demonstration on the topic of “software as a research tool” in a 2D/3D multimedia platform. Obscurity of the created typeface suggests that letters need each other to live, and so do colors, shapes, and cultural elements."]
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
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrlHome'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view3', {templateUrl: 'partials/partial3.html', controller: 'MyCtrl2'});
  $routeProvider.when('/view4', {templateUrl: 'partials/partial4.html', controller: 'MyCtrl3'});
  $routeProvider.when('/view5', {templateUrl: 'partials/partial5.html', controller: 'MyCtrl4'});
  $routeProvider.when('/view6', {templateUrl: 'partials/partial6.html', controller: 'MyCtrl5'});
  $routeProvider.when('/view7', {templateUrl: 'partials/partial7.html', controller: 'MyCtrl6'});
  $routeProvider.when('/view8', {templateUrl: 'partials/partial8.html', controller: 'MyCtrl7'});
  $routeProvider.when('/view9', {templateUrl: 'partials/partial9.html', controller: 'MyCtrl8'});
  $routeProvider.when('/view10', {templateUrl: 'partials/partial10.html', controller: 'MyCtrl9'});
  $routeProvider.when('/view11', {templateUrl: 'partials/partial11.html', controller: 'MyCtrl10'});
  $routeProvider.when('/view12', {templateUrl: 'partials/partial12.html', controller: 'MyCtrl11'});
  $routeProvider.when('/view13', {templateUrl: 'partials/partial13.html', controller: 'MyCtrl12'});
  $routeProvider.when('/view14', {templateUrl: 'partials/partial14.html', controller: 'MyCtrl13'});
  $routeProvider.when('/view15', {templateUrl: 'partials/partial15.html', controller: 'MyCtrl14'});
  $routeProvider.when('/view16', {templateUrl: 'partials/partial16.html', controller: 'MyCtrl15'});
  $routeProvider.when('/view17', {templateUrl: 'partials/partial17.html', controller: 'MyCtrl16'});
  $routeProvider.when('/view18', {templateUrl: 'partials/partial18.html', controller: 'MyCtrl17'});
  $routeProvider.when('/view_add', {templateUrl: 'partials/partial_add.html', controller: 'MyCtrl_add'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
