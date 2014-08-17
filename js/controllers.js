'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('MyCtrlHome', ['$scope', function($scope) {
    $scope.homePage = dataModel;
    $scope.data = {};

    $scope.todos = [
      { action: "Get groceries", complete: false },
      { action: "Call plumber", complete: false },
      { action: "Buy running shoes", complete: true },
      { action: "Buy flowers", complete: false },
      { action: "Call family", complete: false }];
  }])

  .controller('MyCtrl1', ['$scope', function($scope) {
    $scope.project1 = dataModel;

    // $scope.myInterval = 3000;
    // var slides = $scope.slides = [];
    // // slides.image = ['img/picView02.jpg',
    // //                 'img/picView03.jpg',
    // //                 'img/picView04.jpg'];
    // $scope.addSlide = function() {
    //   // var newWidth = 600 + slides.length;
    //   slides.push({
    //     image: ['img/picView02.jpg']
    //     // text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
    //     //   ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    //   });
    // };
    // for (var i=0; i<4; i++) {
    //   $scope.addSlide();
    // }
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
    $scope.project2 = dataModel;
  }])
  .controller('MyCtrl3', ['$scope', function($scope) {
    $scope.project3 = dataModel;
  }])
  .controller('MyCtrl4', ['$scope', function($scope) {
    $scope.project4 = dataModel;
  }])
  .controller('MyCtrl5', ['$scope', function($scope) {
    $scope.project5 = dataModel;
  }])
  .controller('MyCtrl6', ['$scope', function($scope) {
    $scope.project5 = dataModel;
  }])
  .controller('MyCtrl7', ['$scope', function($scope) {
    $scope.project6 = dataModel;
  }])
  .controller('MyCtrl8', ['$scope', function($scope) {
    $scope.project7 = dataModel;
  }]);
