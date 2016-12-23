adminapp.controller('EventNamesCntrl',['$scope','apiservice','$state','$stateParams','EventNameList',function($scope,apiservice,$state,$stateParams,EventNameList){
	var param =$stateParams['from'];
	$scope.EventNameList=EventNameList;
	
	$scope.goTopage=function(EventId,index){
		if(param==='manageEvent'){
			 $state.go('ManageEvent',{eventId:EventId});
		}
		if(param==='deleteEvent'){
            apiservice.eventresource.delete({Eventid:EventId})
            .$promise.then(function(res){
                $scope.EventNameList.splice(index,1);
            },function(error){
                console.log(error);
            })
		}
		if(param==='users'){
			$state.go('UserList',{eventId:EventId});
		}
	};
	
	$scope.statusd="STARTED"
	$scope.submit=function(){
		console.log($scope,$scope.status,$scope.statusd);
		};
		
}]);
