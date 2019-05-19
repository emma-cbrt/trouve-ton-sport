/* Chargement des modules nécessaires */
	
	// charge le module express
	var express = require('express');
	//créer l'objet router du module express
	var router = express.Router();
	//module pour se connecter
	var coAction = require('./../actions/connexion');



//donne la page de connexion
router.get('/', function(req,res) {
	res.render('connexion.ejs', {
		title: 'Connexion'
	});

})
//connecte le client en lui donnant un token
router.post(coAction.login)

// déconnecte le client
.delete(function (req, res, next) {
        res.render('index.ejs', {
        	title : 'Accueil'
        });
});

module.exports = router;