adminapp.controller('ModifyEventCntrl',['$scope','EventList','$state','$stateParams','apiservice',function($scope,EventList,$state,$stateParams,apiservice){	
	var EventId =$stateParams['eventId'];	
	$scope.EventObject=EventList;
    console.log(EventList);
	var agendaLenghtObj={};
	$scope.EventObject.dayList.forEach(function(dayObj){
		var maxagendaNo=0;
		dayObj.agendaList.forEach(function(agendaObj){
			var agendaNo=parseInt(agendaObj.agendaNo.substring(2));				
			if(agendaNo>maxagendaNo)
				maxagendaNo=agendaNo;
		})
		agendaLenghtObj[dayObj.dayNo]=maxagendaNo;			
	});
	$scope.AddDay=function(dayindex){
		console.log(dayindex);
		var dayObj={
		        "day": null,
		        "date": null,
		        "status": false,		        
		        "agendaList": [
		          {		          
		            "endTime": null,
		            "startTime": null,
		            "venue":null,
		            "status": "NOTSTARTED",
		            "title":  null
		          }
		        ],		  
		       
		      };
		
		$scope.EventObject.dayList.splice(dayindex+1,0,dayObj);
	}
    $scope.RemoveDay=function(dayindex){
    	$scope.EventObject.dayList.splice(dayindex,1);
    }
	$scope.AddAgenda=function(dayindex,agendaindex){
		console.log(dayindex,agendaindex);
		var agendaObj=
		          {		          
		            "endTime": null,
		            "startTime": null,
		            "venue":null,
		            "status": "NOTSTARTED",
		            "title":  null
		          };
		      
		
		$scope.EventObject.dayList[dayindex].agendaList.splice(agendaindex+1,0,agendaObj);
	}
    $scope.RemoveAgenda=function(dayindex,agendaindex){
    	$scope.EventObject.dayList[dayindex].agendaList.splice(agendaindex,1);
    }
	
	$scope.modifyEvent=function(){
		
		var userEventObjList=[]
		var i=0;
		$scope.EventObject.dayList.forEach(function(dayObj){	
			var j=agendaLenghtObj[dayObj.dayNo];
			dayObj.agendaList.forEach(function(agendaObj){
				if(!agendaObj.agendaNo){
					j++;
					agendaObj.agendaNo='A'+i+j;
					userEventObj={}
					userEventObj.eventName=$scope.EventObject.eventName;			    
				    userEventObj.dayNo=dayObj.dayNo;
					userEventObj.agendaNo='A'+i+j;			    
					userEventObj.comments=[];
					userEventObj.likes=[];
					userEventObjList.push(userEventObj);
					
				}
				
			});
			i++;
		});
		console.log($scope.EventObject);
		console.log(userEventObjList);
        apiservice.eventresource.update({Eventid:EventId},$scope.EventObject).$promise.then(
            function(res){
                console.log(res);
            },function(error){
                console.log(error);
            });;
	/*	APIService.updateEvent($scope.EventObject).then(
				         function(data){
										APIService.saveUserEventList(userEventObjList).then(function(data){				
										//	location.reload();
										},function(error){
											console.log(error);
										});
				        	 console.log(data);
				         },
				         function(){});*/
	};
	
}]);