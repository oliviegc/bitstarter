var express = require('express');
var fs = require('fs');

var getData = function(filename,response) {
  fs.readFile(filename,function(err,data){
    if (err) throw err;
    //console.log(data);
    response.send(data.toString('utf-8'));
 });
};

var app = express.createServer(express.logger());
app.get('/', function(request, response) {
  getData('index.html',response);
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
