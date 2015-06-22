'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('MyCtrlHome', ['$scope', function($scope) {
    $scope.homePage = dataModel;
    $scope.data = {};

/*
    $scope.todos = [
      { action: "Get groceries", complete: false },
      { action: "Call plumber", complete: false },
      { action: "Buy running shoes", complete: true },
      { action: "Buy flowers", complete: false },
      { action: "Call family", complete: false }];
*/
  }])

  .controller('MyCtrl1', ['$scope', function($scope) {
    $scope.project1 = dataModel;
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
    $scope.project6 = dataModel;
  }])
  .controller('MyCtrl7', ['$scope', function($scope) {
    $scope.project7 = dataModel;
  }])
  .controller('MyCtrl8', ['$scope', function($scope) {
    $scope.project8 = dataModel;
  }])
  .controller('MyCtrl9', ['$scope', function($scope) {
      $scope.project9 = dataModel;
    }])
  .controller('MyCtrl10', ['$scope', function($scope) {
      $scope.project10 = dataModel;
    }])
  .controller('MyCtrl11', ['$scope', function($scope) {
      $scope.project11 = dataModel;
    }])
  .controller('MyCtrl12', ['$scope', function($scope) {
      $scope.project12 = dataModel;
    }])
  .controller('MyCtrl13', ['$scope', function($scope) {
      $scope.project12 = dataModel;
    }])
  .controller('MyCtrl14', ['$scope', function($scope) {
      $scope.project12 = dataModel;
    }])
  .controller('MyCtrl15', ['$scope', function($scope) {
      $scope.project12 = dataModel;
    }])
  .controller('MyCtrl16', ['$scope', function($scope) {
      $scope.project12 = dataModel;
    }])
  .controller('MyCtrl17', ['$scope', function($scope) {
        $scope.project12 = dataModel;
      }])
  .controller('MyCtrl_add', ['$scope', function($scope) {
    $scope.project_add = dataModel;

  }]);
