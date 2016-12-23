var eventUser= require('./../model/eventuser.model.js');
var fs = require('fs')

var adduser=function(user,res){
    var newuser = new eventUser();
    for(var prop in user){
        newuser[prop]=user[prop];
    }
    newuser.save(function(err){
        if(err){
           res.send("Error on saving");
        }
        else{
            res.send("User saved successfully");
        }
    });
}
var getalluser =function(eventid,res){
    console.log("eventid",eventid);
    eventUser.find({eventId:eventid},{fullName:1},function(err,data){
        if(err){
           res.send("Error while retriving users");
        }
        else{
            res.send(data);
        }
    })
};

var getUser=function(eid,uid,res){
    eventUser.findOne({_id:uid,eventId:eid},function(err,data){
           if(err){
            res.send("error while fecthing user details")
        }
        else{
            var img64= (new Buffer(data.pic,'base64')).toString();
            res.send({data:data,pic:img64})
        }
    });
};

module.exports={adduser:adduser,
               getalluser:getalluser,
               getUser:getUser}
