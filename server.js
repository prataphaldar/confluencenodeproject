var app = require('./server/expressroutes/routesconfg')(__dirname);
var port = process.env.PORT?process.env.PORT:4000;
require('./server/mongo/mongodbconfig.js')();
app.listen(port,function(){
    console.log("server running at "+port+"  ........");
});
