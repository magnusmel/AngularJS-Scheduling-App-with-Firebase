// Create AngularJS module and inject Firebase
angular.module('scheduleApp', ['firebase'])

// Create main controller and get access to Firebase
.controller('mainController', function ($scope) {

    // Connect to Firebase
    var ref = new Firebase("https://cow-scheduling-app.firebaseio.com/days");

    // Function to set default data
    $scope.reset = function () {

        ref.set({
            monday: {
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
            tuesday: {
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
            }
        });

    };

});