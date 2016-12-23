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
            		return apiservice.eventresource.query();
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
            		return apiservice.eventresource.get({Eventid:$stateParams.eventId}).$promise;
            	  }
              }
        })
        .state('EventUsers',{
         url:'/EventUsers/:eventId/:action',
         templateUrl: 'EventUsers.html',
         controller:'EventUsersCntrl'
        })
        .state('EventUsersName',{
         url:'/EventUsersName/:eventId/:action',
         templateUrl: 'EventUserNameList.html',
         controller:'EventUserNameListCntrl',
         resolve:{
            	  EventUserNameList:function(apiservice,$stateParams){
            		return apiservice.eventuserresource.query({eventId:$stateParams.eventId}).$promise;
            	  }
              }
        })
       .state('EventUserModify',{
         url:'/EventUserModify/:eventId/:userId',
         templateUrl: 'EventUserModify.html',
         controller:'EventUserModifyCntrl',
         resolve:{
            	  UserDetail:function(apiservice,$stateParams){
            		return apiservice.eventuserresource.get({eventId:$stateParams.eventId,userId:$stateParams.userId}).$promise;
            	  }
              }
        })
        .state('UserList',{
         url:'/UserList/:eventId',
         templateUrl: 'UsersList.html',
         controller:'UserListCntrl'
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
