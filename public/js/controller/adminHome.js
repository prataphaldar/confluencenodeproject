var adminapp=angular.module('AdminEvent',['ui.router','ngResource']);
adminapp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
     $stateProvider
        .state('/',{
        url:'/',
        templateUrl:"EventMenu.html"
        })
        .state('AddEvent',{
         url:'/AddEvent',
         templateUrl: 'AddEvent.html',
         controller:'AddEventCntrl'
        })
        .state('EventNames',{
         url:"/EventNames/:from",
         templateUrl: 'EventNames.html',
         controller:'EventNamesCntrl',
         resolve:{
            	  EventNameList:function(apiservice){
            		return apiservice.eventresource.query(function(res){
                        console.log("eventname resolve ",res);
                    });
            	  }
              }
        })
        .state('ManageEvent',{
         url:'/ManageEvent/:eventId',
         templateUrl: 'ManageEvent.html',
         controller:'MangeEventCntrl'
        })
        .state('ModifyEvent',{
         url:"/ModifyEvent/:eventId",
         templateUrl: 'ModifyEvent.html',
         controller:'ModifyEventCntrl',
         resolve:{
            	  EventList:function(apiservice,$stateParams){
            		return apiservice.eventresource.get({Eventid:$stateParams.eventId},function(res){
                        console.log("eventname resolve ",res);
                    }).$promise;
            	  }
              }
        })
}]);



adminapp.controller('AdminHomeContrl',['$scope','$location',function($scope,$location){
	$scope.person={};
	$scope.getDate=function(date){
		if(date){
		var dd= new Date(date);
		return dd;
	     }
	}
	  $scope.goPrevious=function(){
		  $location.path($scope.previousPage);
	  };

	  $scope.update=function(){
		 $scope.$apply();
	  }
 }]);
