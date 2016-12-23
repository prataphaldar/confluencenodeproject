adminapp.controller('UserListCntrl',['$scope','$state','$stateParams','apiservice', function($scope,$state,$stateParams,apiservice){
	var EventId =$stateParams['eventId'];
	var UserImagelistObj={};
	var userloginlist=[];
	$scope.userCompletelist=[];
	$scope.counter=0;
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
		            	makeUserObj(XL_row_object);

		        })

		    };

		    reader.onerror = function(ex){
		        console.log(ex);
		    };


		};

    $scope.uploadProfileImgages = function(e){
        $.each(e.files,function(key,file){
        console.log("ee",e);
        var key=file.name.split('.')[0];
        UserImagelistObj[key]={};
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
        try
        {
               var temp = new Image();
               temp.src = e.target.result;

               temp.onload = function(){
            	   var a = parseInt(temp.height);
                   var b = parseInt(temp.width);
                   var aspectRatio = parseFloat(a/b);
                   console.log("aspectratio",aspectRatio);

                   RessizeImage.resizeBase64Img(e.target.result,200,200*aspectRatio).then(function(returnedImage){
                	           var alteredPic = returnedImage.substring(returnedImage.indexOf("base64,")+7);
                	           //$scope.EventUserFullList[index].pic=alteredPic;
                	           UserImagelistObj[key].pic=alteredPic;
                	           $scope.counter++;
                                });
                   RessizeImage.resizeBase64Img(e.target.result,200,200*aspectRatio).then(function(returnedImage){
      	           var alteredMiniPic = returnedImage.substring(returnedImage.indexOf("base64,")+7);
      	         //$scope.EventUserFullList[index].miniPic=alteredMiniPic;
      	           				UserImagelistObj[key].miniPic=alteredMiniPic;
                      });
               }
        }
        catch(err)
        { }
               }
               });

         // console.log(Userlist);

        };

   var makeUserObj =function(userlist){
	   console.log(UserImagelistObj);
	   userlist.forEach(function(userObj){
		   userObj.eventName= EventName;
		   if(UserImagelistObj[userObj.empId]){
		   userObj.pic=UserImagelistObj[userObj.empId].pic;
		   userObj.miniPic=UserImagelistObj[userObj.empId].miniPic;
		   }
		   else{
			   userObj.pic=UserImagelistObj["dummy"].pic;
			   userObj.miniPic=UserImagelistObj["dummy"].miniPic;
		   }

		   if(!userObj.contactNo){
			   userObj.contactNo='1234567890';
		   }

		   var EventUserObj ={
					"eventName":EventName,
					"empId" : userObj.empId,
				    "emailId" : "dummyMail@ge.com",
				    "password" : "test123"
				};
		   $scope.userCompletelist.push({
				 "eventName" : EventName,
				 "active" : 0,
				 "fullName" : userObj.fullName,
				 "business" : userObj.business,
				 "account" : userObj.account,
				 "email" : "dummyMail@ge.com",
				 "contactNo" : userObj.contactNo,
				 "empId" : userObj.empId,
				 "pic" : userObj.pic,
				 "miniPic" : userObj.miniPic,
				 "tableNo": userObj.day1+','+userObj.day2+','+userObj.day3
		   });
		   userloginlist.push(EventUserObj);
	   });

	   $scope.$digest();
	   console.log(userlist);
   }


   $scope.submitAll=function(){
     console.log();
   }

 }]);
