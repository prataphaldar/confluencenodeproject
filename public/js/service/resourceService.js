adminapp.service('apiservice',['$resource',function($resource){
    var eventresource=(function(){
        return $resource('/api/Event/:Eventid',{Eventid:'@_Eventid'},{
            update:{method:'PUT'}
        });
    })();
    var eventuserresource=(function(){
        return $resource('/api/user/:eventId/:userId',{
            update:{method:'PUT'}
        });
    })();

    return{eventresource:eventresource,
          eventuserresource:eventuserresource};
}]);
