var express= require('express');
var bodyParser= require('body-parser');
var homeroute=require('./homeroutes');
var eventroute=require('./eventroutes');
var path = require('path');
module.exports=function(rootdir){
    console.log("rootpath",path.join(rootdir, 'public','view'));
    var app= express();
    app.use(express.static(rootdir+"/public"));
    app.use(express.static(rootdir+"/public/view"));
    console.log('xyz',rootdir+"/public/view")
    app.use(bodyParser.json());
    homeroute(app,rootdir);
    eventroute(app);
    return app; 
};

