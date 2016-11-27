adminapp.controller('AddEventCntrl',function($scope,apiservice,$location){
	$scope.EventObject={
		    "date": null,
		    "eventName": null,	
		    "status": false,
		    "dayList": [
		      {
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
		       
		      }
		    ]
		   
	};
	
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
		$scope.EventObject=angular.copy($scope.EventObject);
	}
	
	$scope.uplodeXls=function(file){
	    var reader = new FileReader();
	     reader.readAsBinaryString(file);
	    reader.onload = function(e){
	        var data = e.target.result;
	        var workbook = XLSX.read(data, {type : 'binary'});

	        workbook.SheetNames.forEach(function(sheetName){
	            // Here is your object
	            var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
	            var json_object = JSON.stringify(XL_row_object);
	           // console.log(json_object);
	            if(sheetName==="Sheet1")
	            	makeEventObj(XL_row_object);

	        })

	    };

	    reader.onerror = function(ex){
	        console.log(ex);
	    };
   };	
   
   function makeEventObj(jsonObj){
       
       var eventObj = {};
       
       eventObj.dayList =[];
      
      //var agendaDummyArray = [];
       jsonObj.forEach(function(excelRow){
           eventObj.eventName = excelRow.eventName;
           eventObj.status = excelRow.status;
           eventObj.date = new Date(excelRow.date);
           
           var dayFound = false;
           for(var i=0;i<eventObj.dayList.length;i++){
               if(eventObj.dayList[i].day===excelRow.day){
                   
                   dayFound = true;
                     eventObj.dayList[i].agendaList.push({title:excelRow.title,endTime:new Date("Wed Jul 27 " +excelRow.endTime),startTime:new Date("Wed Jul 27 " +excelRow.startTime),venue:excelRow.venue,status:excelRow.status3});
                   break;
               }
               
               
           }
           if(dayFound){          

              
           }
           else{

                    var dummyDayListObj = {agendaList : []};
               dummyDayListObj.day = excelRow.day;   

                  dummyDayListObj.date = new Date(excelRow.date2);
               dummyDayListObj.status = excelRow.status2; dummyDayListObj.agendaList.push({title:excelRow.title,endTime:new Date("Wed Jul 27 " +excelRow.endTime),startTime:new Date("Wed Jul 27 " +excelRow.startTime),venue:excelRow.venue,status:excelRow.status3});
                   eventObj.dayList.push(dummyDayListObj);
        
           }

           
       });
       
       $scope.EventObject=eventObj;
       $scope.$digest();
      // return eventObj;
   }

	
	
    $scope.RemoveDay=function(dayindex){
    	console.log(dayindex);
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
    	console.log(dayindex,agendaindex);
    	$scope.EventObject.dayList[dayindex].agendaList.splice(agendaindex,1);
    }
	
	$scope.submitEvent=function(){		
		var i=0;
		var userEventObjList=[];
		$scope.EventObject.dayList.forEach(function(dayObj){
			dayObj.dayNo='D'+i;
			var j=0;
			dayObj.agendaList.forEach(function(agendaObj){
				agendaObj.agendaNo='A'+i+j;
				var userEventObj={};
				userEventObj.eventName=$scope.EventObject.eventName;			    
			    userEventObj.dayNo='D'+i;
				userEventObj.agendaNo='A'+i+j;			    
				userEventObj.comments=[];
				userEventObj.likes=[];
				userEventObjList.push(userEventObj);
				j++;
			});
			i++;
		});
		console.log($scope.EventObject);
		//console.log(userEventObjList);
		console.log(($scope.EventObject).stringify);
	apiservice.eventresource.save($scope.EventObject,function(response){
        console.log(response);
    });
		
		
		/////
		
/*		APIService.saveNewEvent($scope.EventObject).then(function(data){
			APIService.saveUserEventList(userEventObjList).then(function(data){				
				//location.reload();
			},function(error){
				console.log(error);
			});			

		},function(error){
			console.log(error);
		});*/
	};
	
//	var setDayNo=function(dayindex){
//		console.log(dayindex);
//		return 'D'+dayindex;
//	}
//   var setAgendaNo=function(dayindex,agendaindex){
//	   console.log(dayindex,agendaindex);
//	   return 'D'+dayindex+agendaindex;
//	}
	
});