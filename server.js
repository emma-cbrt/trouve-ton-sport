/* Chargement des librairies nécessaire au bon fonctionnement de l'app */

	//charge le module d'express(sorte de framework).
	//La variable express sert à utiliser fonctionnalités d'Express.
	var express = require('express');
	// Charge le middleware de mysql 
	var mysql = require('mysql');
	//charge le middleware de cookie-parser afin d'utiliser les cookies avec express
	var cookieParser = require('cookie-parser');
	//module parses the JSON, buffer, string and URL 
	//encoded data submitted using HTTP POST request. 
	var bodyParser = require('body-parser'); 
	//The Path module provides a way of working with directories and file paths
	var path = require('path');
	//s and basically used as a logger. It can be used 
	//with node js' winston package to consolidate HTTP request data logs with other i
	var morgan = require('morgan');
	//notre module routes
	var Routes = require('./routes/routes.js');

// Create a new Express Instance (une application)
var app = express();


//donne accès à l'application pour utiliser le dossier static public
//qui contient les images, css etc..
app.use(express.static(path.join(__dirname, 'public')))

//set the view engine to ejs
.set('view engine', 'ejs')

//précise à au serveur utilise body parser configuré
// pour l'encodage classique
.use(bodyParser.urlencoded({ extended: false }))

//notre serveur se sert de notre module routes
.use('/', Routes)

//Route 404
.use('*', (req, res) => {
    res.status(404).send('Error 404');
})


.listen(8080);






