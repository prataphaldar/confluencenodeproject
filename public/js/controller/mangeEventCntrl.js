adminapp.controller('MangeEventCntrl',[ '$scope','$stateParams','$state', function($scope,$stateParams,$state){
	var EventId =$stateParams['eventId'];

				$scope.ModifyEvent=function(){
					$state.go('ModifyEvent',{eventId:EventId});
				};
				$scope.ModifyUser=function(){
					$state.go('EventUsersName',{eventId:EventId,action:'modifyUser'});
					};
				$scope.RemoveUser=function(){
					//$location.path('/AddEventUsers/'+EventName+'/removeuser');
				};
				$scope.AddUser=function(){
					$state.go('EventUsers',{eventId:EventId,action:'adduser'});
				};
 }]);
