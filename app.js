// Create AngularJS module and inject Firebase
angular.module('scheduleApp', ['firebase'])

// Create main controller and get access to Firebase
.controller('mainController', function ($scope, $firebase) {

    // Connect to Firebase
    var ref = new Firebase("https://cow-scheduling-app.firebaseio.com/days");
    var fb = $firebase(ref);

});