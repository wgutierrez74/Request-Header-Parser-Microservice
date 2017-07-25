var moment

module.exports = function(app){
  
  var json = {
    'unix':null,
    'natural':null
  }
  
  app.route('/', function(req, res){
    
    res.sendFile(process.cwd()+ 'views/index.html');
    
  });
  
  
  app.route('/:query', function(req, res){
    
    var query = req.params.query;
    
    if(!Number(query) && new Date(query) == 'Invalid Date'){
      res.send(json);
    }
    
    if(Number(query)){
      json.unix = query;
      json.natural = 
    }
    else{
      json.unix = (new Date(query).getTime()/1000).toFixed(0);
      json.natural = moment.unix(query).format("MMMM Do, YYYY");
    }
    
    
    res.send(json);
    
  });
    
 
  
}