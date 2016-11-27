var eventdao= require('./../mongo/dao/eventdao')
module.exports=function(app){
    app.post('/api/Event',function(req,res){       
        eventdao.addEvent(req.body,res);
       });
    app.get('/api/Event',function(req,res){
        eventdao.getAllEventlist(res);
    });
    app.delete('/api/Event/:eid',function(req,res){
        eventdao.deleteEvent(req.params.eid,res);
    });
    app.get('/api/Event/:eid',function(req,res){
        eventdao.getEvent(req.params.eid,res);
    });
    app.put('/api/Event/:eid',function(req,res){
        eventdao.updateEvent(req.params.eid,req.body,res);
    });
}