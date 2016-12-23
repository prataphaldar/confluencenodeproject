adminapp.controller('EventUserNameListCntrl',['$scope','apiservice','$state','$stateParams','EventUserNameList',function($scope,apiservice,$state,$stateParams,EventUserNameList){
	var EventId =$stateParams['eventId'];
	var action =$stateParams['action'];
	$scope.EventUserNameList=EventUserNameList;

	$scope.doActionOnUser=function(UserId,index){
		if(action==='modifyUser'){
			 $state.go('EventUserModify',{eventId:EventId,userId:UserId});
		}
		if(action==='deleteUser'){
            apiservice.eventresource.delete({Eventid:EventId})
            .$promise.then(function(res){
                $scope.EventNameList.splice(index,1);
            },function(error){
                console.log(error);
            })
		}
	};
}]);
