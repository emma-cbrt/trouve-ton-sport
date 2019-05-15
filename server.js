//charge le module d'express(sorte de framework).
//La variable express sert à utiliser fonctionnalités d'Express.
var express = require('express');
//charle le module mysql 
var mysql = require('mysql');
// Charge le middleware de sessions
var cookieParser = require('cookie-parser');
// Charge le middleware de gestion des paramètres
var bodyParser = require('body-parser'); 
var path = require('path');
var logger = require('morgan');
var Routes = require('./routes/index.js');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

//charge les routes
app.use('/', Routes); 

//Route 404
app.use('*', (req, res) => {
    res.status(404).send('Error 404');
});


app.listen(3001);






