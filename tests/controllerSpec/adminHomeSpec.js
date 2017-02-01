describe('adminHome',function(){
    describe('AdminHomeContrl',function(){
        var $scope,$rootScope,controller;
        beforeEach(function(){
            module('AdminEvent');
            inject(function($injector){
                $rootScope= $injector.get("$rootScope");
                $scope=$rootScope.$new();
                controller=$injector.get('$controller')('AdminHomeContrl',{$scope:$scope});
            });
        });
        it('should have person Object',function(){
            expect($scope.person).toBeDefined();
        });
        it('should have person Object',function(){
            expect($scope.getDate(new Date())).toBeDefined();
        });

    });
});

describe('config test',function(){
     var $state,$rootScope,$templateCache,state,apiservice,mockservice;
     beforeEach(function(){
          module('AdminEvent');
          inject(function($injector){
             $state=$injector.get('$state');
             $rootScope=$injector.get('$rootScope');
             $templateCache=$injector.get('$templateCache');
             apiservice=$injector.get('apiservice');
          });
         });
    describe('/',function(){

        beforeEach(function(){
            state='/';
            inject(function(){
                $templateCache.put("EventMenu.html","")
               /* $rootScope.$apply(function(){
                $state.go('/');
                })*/;
                $state.go(state);
                $rootScope.$digest();
            });
        });
        it('should change to the / state',function(){
             expect($state.current.name).toEqual(state);
        });
        it('should have to the / href',function(){
             expect($state.href(state)).toEqual("#/");
        });
    });
    describe('AddEvent',function(){
        beforeEach(function(){
            state='AddEvent';
            inject(function(){
                $templateCache.put("AddEvent.html","");
                $state.go(state);
                $rootScope.$digest();
            });
        });
        it('should change to the / state',function(){
             expect($state.current.name).toEqual(state);
        });
        it('should have to the / href',function(){
             expect($state.href(state)).toEqual("#/"+state);
        });
    });
        describe('EventNames',function(){
        beforeEach(function(){
            state='EventNames';
          mockservice=  spyOn(apiservice.eventresource,'query');
            inject(function(){
                $templateCache.put("EventNames.html","");
                $state.go(state,{from:"modify"});
                $rootScope.$digest();
            });
        });
        it('should change to the '+state+' state',function(){
             expect($state.current.name).toEqual(state);
        });
        it('should have to the /'+state+' href',function(){
             expect($state.href(state,{from:"modify"})).toEqual("#/"+state+'/modify');
        });
        it('should have called the apiservice',function(){
             expect(apiservice.eventresource.query).toHaveBeenCalled();
        });
        it('should have called the apiservice',function(){
             expect(mockservice).toHaveBeenCalled();
        });
    });

     describe('ManageEvent',function(){
       var id=1234;
        beforeEach(function(){
            state='ManageEvent';
            inject(function(){
                $templateCache.put("ManageEvent.html","");
                $state.go(state,{eventId:id});
                $rootScope.$digest();
            });
        });
        it('should change to the / state',function(){
             expect($state.current.name).toEqual(state);
        });
        it('should have to the / href',function(){
             expect($state.href(state)).toEqual("#/"+state+'/'+id);
        });
    });

     describe('ModifyEvent',function(){
          var id=1234;
        beforeEach(function(){
          state='ModifyEvent';
          mockservice=  spyOn(apiservice.eventresource,'get').and.returnValue({$promise:{}});
            inject(function(){
                $templateCache.put("ModifyEvent.html","");
                 $state.go(state,{eventId:id});
                $rootScope.$digest();
            });

        });
        it('should change to the '+state+' state',function(){
             expect($state.current.name).toEqual(state);
        });
        it('should have to the /'+state+' href',function(){
             expect($state.href(state,{from:"modify"})).toEqual("#/"+state+'/'+id);
        });
        it('should have called the apiservice',function(){
             expect(apiservice.eventresource.get).toHaveBeenCalled();
        });
    });


});
