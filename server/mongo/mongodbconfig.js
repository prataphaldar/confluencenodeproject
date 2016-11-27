var mongoose = require('mongoose');

module.exports= function(){
    var db='mongodb://localhost/exampleDB';
    mongoose.connect(db);    
}