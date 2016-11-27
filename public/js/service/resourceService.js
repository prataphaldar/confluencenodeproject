adminapp.service('apiservice',['$resource',function($resource){
    var eventresource=(function(){
        return $resource('/api/Event/:Eventid',{Eventid:'@_Eventid'},{
            update:{method:'PUT'}
        });
    })();
    console.log(eventresource);
    return{eventresource:eventresource};
}]);