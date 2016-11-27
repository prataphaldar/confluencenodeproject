var app = require('./server/expressroutes/routesconfg')(__dirname);
require('./server/mongo/mongodbconfig.js')();
app.listen(4000,function(){
    console.log("server running at port 4000 ........");
});