# AngularJS: Real-Time Scheduling App with Firebase
_by Gary Pang, "CodeWritingCow"_

This is a real-time scheduling app made with AngularJS and Firebase.
From the Scotch.io tutorial, ["Build a Real-Time Scheduling App using AngularJS and Firebase,"](https://scotch.io/tutorials/build-a-real-time-scheduling-app-using-angularjs-and-firebase) by Chris Sevilleja.


## Changes since AngularFire 1.x
The tutorial uses AngularFire 0.8.0, which includes the $firebase service and $set() method. Both have been removed from AngularFire since version 1.x, so I have rewritten my app accordingly. Below are snippets of codes from the original app, followed by my updated one.


##### Original
```javascript
// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {
  
  // connect to firebase 
  var ref = new Firebase("https://xxxxx.firebaseio.com/days");  
  var fb = $firebase(ref);

  // sync as object 
  var syncObject = fb.$asObject();

  // three way data binding
  syncObject.$bindTo($scope, 'days');
  ```


##### Updated
```javascript
.controller('mainController', function ($scope, $firebaseObject) {

    var ref = new Firebase("https://xxxxx.firebaseio.com/days");

    var syncObject = $firebaseObject(ref);

    syncObject.$bindTo($scope, 'days');
```

Read more about changes since AngularFire 1.x in Firebase's [migration guides.](https://www.firebase.com/docs/web/libraries/angular/migration-guides.html)