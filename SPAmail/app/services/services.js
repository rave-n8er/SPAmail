


// can never use this - impossible to return data out of the anonymous function;
// $scope is empty at this level, too.
function getMyEmails(boxType, $scope, $http) {

    // gets emails from json. Could be a webservice...
    $http.get('emails.json').success(function (data) {

        switch (boxType) {
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