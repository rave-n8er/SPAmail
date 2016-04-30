(function () {
    'use strict';

    angular.module('SPAmailApp').controller('getMails', function ($scope, $http) {

        // gets emails from json.  defaults to Inbox.
        // CANNOT MOVE THIS OUT OF HERE TO ANOTHER FUNCTION - 
        // $scope becomes unavailable, despite being passed in, 
        // and no data can be returned from the anonymous 'success' function!
        $http.get('emails.json').success(function (data) {

            $scope.emails = data.inboxMails;

        });

    });


    angular.module('SPAmailApp').controller('changeBox', function ($scope, $http) {

        // Just for this event.
        $scope.boxType = function (boxtype) {

            // gets emails from json. Could be a webservice...
            // CANNOT MOVE THIS OUT OF HERE TO ANOTHER FUNCTION - 
            // $scope becomes unavailable, despite being passed in, 
            // and no data can be returned from the anonymous 'success' function!
            $http.get('emails.json').success(function (data) {

                switch (boxtype) {
                    case 'DR':
                        $scope.emails = data.draftMails;
                        break;
                    case 'IN':
                        $scope.emails = data.inboxMails;
                        break;
                    case 'SE':
                        $scope.emails = data.sentMails;
                        break;
                    default:
                        $scope.emails = null;
                }
            });
        }

    });

})();



