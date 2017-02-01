adminapp.controller('AdminHomeContrl',['$scope','$location','$state',function($scope,$location,$state){
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
      $state.go('adminHome.menu');
 }]);
