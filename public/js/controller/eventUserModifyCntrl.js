adminapp.controller('EventUserModifyCntrl',['$scope','UserDetail','$state','$stateParams','apiservice',function($scope,UserDetail,$state,$stateParams,apiservice){
    console.log(UserDetail);
   $scope.EventUser =UserDetail.data;
   $scope.EventUser.pic="data:image/jpeg;base64,"+UserDetail.pic
    console.log($scope.EventUser.pic);

}])
