

module.exports = function(app){
  
 
  
  app.route("/").get(function(req, res){
    console.log("HOME");
    res.sendFile(process.cwd()+ '/views/index.html');
    
  });
  
  
  app.route('/whoami').get(function(req, res){
    
    
    
    var json = {
    'IP address':req.headers["x-fowarded-for"].split(",")[0],
    'Language':req.headers["accept-language"].split(",")[0],
    'Software':null
    };
    
    
    
    res.send(json);
    
  });
    
 
  
}