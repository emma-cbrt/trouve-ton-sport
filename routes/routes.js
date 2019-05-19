/* Chargement des modules nécessaires */
	
	// charge le module express
	var express = require('express');
	//créer l'objet router du module express
	var router = express.Router();

	var accueil = require('./accueil.js');
	var clubsport = require('./clubsport.js');
	var evenement = require('./evenement.js');
	var connexion = require('./connexion.js');
	var inscription = require('./inscription.js');
	// var ajoutsport = require('./ajoutsport.js');
	// var moncompte = require('./moncompte.js');
	// var	messports = require('./messports.js');
	// var mespartenaires = require('./mespartenaires.js')
	// var mesevents = require('./mesevenements.js')

/* Fin chargement */

/*module qui enregistre iduser */

const enregistrerid = (req, res, next) => {
    req.idUser = req.params.idUser;
    next();
};

/*Routes */

router.use('/', accueil)
.use('/ClubSport', clubsport)
.use('/Evenement', evenement)
// .use('/:idUser/Partenaire',enregistrerid, partenaire)
.use('/Connexion', connexion)
.use('/Inscription', inscription)
// .use('/Pratiquer', ajoutsport)
// .use('/Comptes/:idUser', enregistrerid, monompte)
// .use('/Comptes/:idUser/mesSport', enregistrerid, messporst)
// .use('/Comptes/:idUser/mesParetnaires', enregistrerid, mesparetnaires)
// .use('/Comptes/:idUser/mesEvenement', enregistrerid, mesevents)


module.exports = router