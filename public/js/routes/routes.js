var adminapp=angular.module('AdminEvent',['ui.router','ngResource']);
adminapp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
     $stateProvider
        .state('/',{
        url:'/',
        templateUrl:"Login.html",
        controller:'LoginCntrl'
        })
        .state('adminHome',{
        url:'/adminHome',
        templateUrl:"AdminHome.html",
        controller:'AdminHomeContrl'
        })
        .state('adminHome.menu',{
        url:'/menu',
        templateUrl:"EventMenu.html"
        })
        .state('adminHome.AddEvent',{
         url:'/AddEvent',
         templateUrl: 'AddEvent.html',
         controller:'AddEventCntrl'
        })
        .state('adminHome.EventNames',{
         url:"/EventNames/:from",
         templateUrl: 'EventNames.html',
         controller:'EventNamesCntrl',
         resolve:{
            	  EventNameList:function(apiservice){
            		return apiservice.eventresource.query();
            	  }
              }
        })
        .state('adminHome.ManageEvent',{
         url:'/ManageEvent/:eventId',
         templateUrl: 'ManageEvent.html',
         controller:'MangeEventCntrl'
        })
        .state('adminHome.ModifyEvent',{
         url:"/ModifyEvent/:eventId",
         templateUrl: 'ModifyEvent.html',
         controller:'ModifyEventCntrl',
         resolve:{
            	  EventList:function(apiservice,$stateParams){
            		return apiservice.eventresource.get({Eventid:$stateParams.eventId}).$promise;
            	  }
              }
        })
        .state('adminHome.EventUsers',{
         url:'/EventUsers/:eventId/:action',
         templateUrl: 'EventUsers.html',
         controller:'EventUsersCntrl'
        })
        .state('adminHome.EventUsersName',{
         url:'/EventUsersName/:eventId/:action',
         templateUrl: 'EventUserNameList.html',
         controller:'EventUserNameListCntrl',
         resolve:{
            	  EventUserNameList:function(apiservice,$stateParams){
            		return apiservice.eventuserresource.query({eventId:$stateParams.eventId}).$promise;
            	  }
              }
        })
       .state('adminHome.EventUserModify',{
         url:'/EventUserModify/:eventId/:userId',
         templateUrl: 'EventUserModify.html',
         controller:'EventUserModifyCntrl',
         resolve:{
            	  UserDetail:function(apiservice,$stateParams){
            		return apiservice.eventuserresource.get({eventId:$stateParams.eventId,userId:$stateParams.userId}).$promise;
            	  }
              }
        })
        .state('adminHome.UserList',{
         url:'/UserList/:eventId',
         templateUrl: 'UsersList.html',
         controller:'UserListCntrl'
        })
}]);
