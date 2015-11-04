  // use mogodb 
  Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);

  // Template.hello.helpers({
  //   counter: function () {
  //     return Session.get('counter');
  //   }
  // });

  // Template.hello.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set('counter', Session.get('counter') + 1);
  //   }
  // });
    // This code only runs on the client
  angular.module('meteorApp',['angular-meteor']);

  //use local value
  // var app = angular.module('meteorApp');
  // app.controller('toDoListCtrl',['$scope',function($scope){
  //    $scope.tasks = [
  //       { text: 'This is task 1' },
  //       { text: 'This is task 2' },
  //       { text: 'This is task 3' }
  //     ];

  // }]);
  var app = angular.module('meteorApp');
  app.controller('toDoListCtrl',['$scope','$meteor',function($scope,$meteor){
    $scope.tasks = $meteor.collection(Tasks);
  }]);


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
