
const express = require('express');
// Request para servicio captcha
const path = require('path');
const port = 8080;

// Express application
const app = express();

app.use(express.static(__dirname + '/ionicapp'));

// app.listen(process.env.PORT || 8080);

app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname + '/ionicapp/index.html'));
});



app.listen(process.env.PORT || 8080);


console.log('Finalizo');
