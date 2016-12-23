adminapp.controller('EventUsersCntrl',['$scope','$state','$stateParams','apiservice',function($scope,$state,$stateParams,apiservice){
	$scope.userbusiness={};
	$scope.accounts=[];
	var EventId =$stateParams['eventId'];
	var action =$stateParams['action'];
	var EventUserFullObj={
			 "eventId" : EventId,
			 "active" : 0,
			 "fullName" : "",
			 "business" : "",
			 "account" : "",
			 "contactNo" : "",
			 "empId" : "",
			 "pic" : "",
			// "miniPic" : "",
			 "emailId" : "",
			 "password" : 'test123',
			 "tableNo":""
	};
	$scope.businessObj = [
                          {
                              name :"GE",
                              account:["Leadership","Relationship","Capita","Digital","Corporate","Commercial","Energy Entities","Healthcare","Engineering","BPS" ]
                              },
                              {
                              name :"Nielsen",
                              account:["BPS","IT","Relationship"]
                              },
                              {
                              name :"Other",
                              account:["Other"]
                              }
                             ];


	$scope.EventUserFullList=[];
	$scope.EventUserList=[];
	$scope.EventUserDetailsList=[];
	//$scope.EventUserFullList.push(EventUserFullObj);

	if(action=='adduser'){
		$scope.addUser=true;
		$scope.EventUserFullList.push(angular.copy(EventUserFullObj));
		console.log($scope.EventUserList);
	}
	$scope.chngBusi=function(index){
		//$scope.$apply();
		var userbusiness=angular.element('#userbusiness_'+index).val();
		$scope.EventUserFullList[index].business=userbusiness;
		$scope.businessObj.forEach(function(bobj){
			if(bobj.name===userbusiness)
				$scope.accounts=bobj.account;
		});

	};

	$scope.AddUser=function(index){
		$scope.EventUserFullList.splice(index+1,0,angular.copy(EventUserFullObj));
	};
	$scope.RemoveUser=function(index){
		$scope.EventUserFullList.splice(index,1)
	};

	$scope.submitUserList=function(){
    console.log($scope.EventUserFullList);
       $scope.EventUserFullList.forEach(function(evenUserObj){           apiservice.eventuserresource.save({eventId:EventId},evenUserObj,function(response){
        console.log(response);
    });
       });
	};

    $scope.uploadProfileImg = function(e){
    	var index= e.id.split('_')[1];
        var filetype="123";
        $.each(e.files,function(key,file){
        console.log("ee",e);
        //console.log($scope.user.image);
        filetype = file.type;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
        try
        {      var temp = new Image();
               temp.src = e.target.result;
               temp.onload = function(){
             $scope.EventUserFullList[index].pic=temp.src.replace("data:"+ filetype +";base64,", '');
               }
        }
        catch(err)
        { }
               }
               });



        };

 }]);
