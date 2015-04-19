/**
 * Created by Alienware on 19/4/2015.
 */

'use strict';

(function(){
    var eventsApp = angular.module("eventsApp",[]);

    var EventController = function($scope){

        $scope.event = {
            name: "Angular Boot Camp",
            date: "1/1/2015",
            time: "10:30 PM"
        }

    };

    eventsApp.controller("EventController", EventController);

}());