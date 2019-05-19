/* Chargement des modules nécessaires */
	
	// charge le module express
	var express = require('express');
	//créer l'objet router du module express
	var router = express.Router();
	//charge le module des action pour les club
	var club = require ('./../actions/clubSport');



router.get('/', club.listClub);

// .get('/ClubSport/:sport');

module.exports = router;