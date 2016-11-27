var mongoose = require('mongoose');

module.exports= function(){
    //var db='mongodb://localhost/exampleDB';
    var db='mongodb://root:root@ds111718.mlab.com:11718/exampledb';
    mongoose.connect(db);
    var con = mongoose.connection;
    con.once('open',function(){
        console.log("connected to database successfully");
    });
}
