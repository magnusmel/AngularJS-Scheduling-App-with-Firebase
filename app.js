// Create AngularJS module and inject Firebase
angular.module('scheduleApp', ['firebase'])

// Create main controller and get access to Firebase
.controller('mainController', function ($scope, $firebaseObject) {

    // Connect to Firebase
    var ref = new Firebase("https://cow-scheduling-app.firebaseio.com/days");

    // Sync as object. Original tutorial uses $firebase and $asObject(). 
    var syncObject = $firebaseObject(ref);

    // Three-way data binding
    syncObject.$bindTo($scope, 'days');

    // Function to set default data
    $scope.reset = function () {

        ref.set({
            day1: {
                name: 'Monday',
                slots: {
                    0900: {
                        time: '9 a.m.',
                        booked: false
                    },
                    0110: {
                        time: '11 a.m.',
                        booked: false
                    }
                }
            },
            day2: {
                name: 'Tuesday',
                slots: {
                    0900: {
                        time: '9 a.m.',
                        booked: false
                    },
                    0110: {
                        time: '11 a.m.',
                        booked: false
                    }
                }
            },
            day3: {
                name: 'Wednesday',
                slots: {
                    0900: {
                        time: '9 a.m.',
                        booked: false
                    },
                    0110: {
                        time: '11 a.m.',
                        booked: false
                    }
                }
            },
            day4: {
                name: 'Thursday',
                slots: {
                    0900: {
                        time: '9 a.m.',
                        booked: false
                    },
                    0110: {
                        time: '11 a.m.',
                        booked: false
                    }
                }
            },
            day5: {
                name: 'Friday',
                slots: {
                    0900: {
                        time: '9 a.m.',
                        booked: false
                    },
                    0110: {
                        time: '11 a.m.',
                        booked: false
                    }
                }
            }

        });

    };

});