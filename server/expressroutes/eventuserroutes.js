var eventuserdao = require('./../mongo/dao/eventuserdao');

module.exports=function(app){
  app.get('/api/user/:Eventid',function(req,res){
       eventuserdao.getalluser(req.params.Eventid,res);
  });
  app.post('/api/user/:Eventid',function(req,res){
      eventuserdao.adduser(req.body,res);
  });
  app.get('/api/user/:Eventid/:UserId',function(req,res){
      eventuserdao.getUser(req.params.Eventid,req.params.UserId,res);
  });
};
