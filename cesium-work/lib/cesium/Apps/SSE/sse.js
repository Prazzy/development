// define the module we're working with
var module = angular.module('sse', []);

// define the ctrl
module.controller("SSEController", function($scope) {

    // the last received msg
    $scope.msg = {};

    // handles the callback from the received event
    var handleCallback = function (msg) {
        $scope.$apply(function () {
            $scope.msg = JSON.parse(msg.data)
        });
    };

    var source = new EventSource('/stats');
    source.addEventListener('message', handleCallback, false);
});


