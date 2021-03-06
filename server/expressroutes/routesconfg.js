var express= require('express');
var bodyParser= require('body-parser');
var cors = require('cors');
var homeroute=require('./homeroutes');
var loginroute=require('./loginroutes');
var eventroute=require('./eventroutes');
var eventuserroute=require('./eventuserroutes');
var path = require('path');
module.exports=function(rootdir){
    console.log("rootpath",path.join(rootdir, 'public','view'));
    var app= express();
    app.use(express.static(rootdir+"/public"));
    app.use(express.static(rootdir+"/public/view"));
    console.log('xyz',rootdir+"/public/view");
    app.use(cors());
    app.use(bodyParser.json({limit: '50mb'}));
    homeroute(app,rootdir);
    loginroute(app);
    eventroute(app);
    eventuserroute(app);
    return app; 
};

