module.exports = function(app,rootdir){ 
    console.log('app ',rootdir);
    app.get('/',function(req,res){
      res.sendfile('\public/view/AdminHome.html');
      });
}