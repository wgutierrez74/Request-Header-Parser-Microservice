var moment = require('moment');

module.exports = function(app){
  
 
  
  app.route("/").get(function(req, res){
    console.log("HOME");
    res.sendFile(process.cwd()+ '/views/index.html');
    
  });
  
  
  app.route('/:query').get(function(req, res){
    
    var query = req.params.query;
    
    var json = {
    'unix':null,
    'natural':null
    };
    
    if(!Number(query) && new Date(query) == 'Invalid Date'){
      res.send(json);
    }
    
    if(Number(query)){
      json.unix = query;
      json.natural = moment.unix(query).format("MMMM Do, YYYY");
    }
    else{
      json.unix = (new Date(query).getTime()/1000).toFixed(0);
      json.natural = query;
    }
    
    
    res.send(json);
    
  });
    
 
  
}