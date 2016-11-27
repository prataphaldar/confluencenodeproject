var Event = require('./../model/event.model.js');
var addEvent=function(event,res){
    var ev = new Event();
    for(var prop in event){
        ev[prop]=event[prop];
    }
    console.log(ev);
    ev.save(function(err){
        if(err){
           res.send("Error on saving"); 
        }
        else{
            res.send("Event saved successfully");
        }
    })   
}
var getAllEventlist=function(res){
    Event.find({},{eventName:1}).exec(function(err,data){
         if(err){
            res.send("error while retrieving books")
        }
        else{
            res.send(data)
        }
    });
}
var deleteEvent=function(eid,res){
    console.log("deleteEvent",eid)
    Event.remove({_id:eid},function(err){
        if(err){
            res.send("error while deleting event")
        }
        else{
            res.send("Event deleted successfully")
        } 
    })
};
var getEvent=function(eid,res){
    Event.find({_id:eid},function(err,data){
           if(err){
            res.send("error while deleting event")
        }
        else{
            res.send(data[0])
        }
    });
};
var updateEvent = function(eid,nevent,res){
    Event.findOneAndUpdate({_id:eid},{$set:nevent},function(err){
           if(err){
            res.send("error while deleting event")
        }
        else{  
             res.send("Event updated successfully");
        }
    })
    console.log(eid,nevent);
};
module.exports={addEvent:addEvent,
               getAllEventlist:getAllEventlist,
                deleteEvent:deleteEvent,
                getEvent:getEvent,
                updateEvent:updateEvent
               };