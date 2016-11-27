adminapp.controller('MangeEventCntrl',['$scope','$stateParams','$state',function($scope,$stateParams,$state){
	var EventId =$stateParams['eventId'];
	
				$scope.ModifyEvent=function(){
					$state.go('ModifyEvent',{eventId:EventId});
				};
				$scope.ModifyUser=function(){
					//$location.path('/AddEventUsers/'+EventName+'/modifyuser');
					};
				$scope.RemoveUser=function(){
					//$location.path('/AddEventUsers/'+EventName+'/removeuser');
				};
				$scope.AddUser=function(){
					$state.go('/EventUsers/'+EventId+'/adduser');
				};
 }]);