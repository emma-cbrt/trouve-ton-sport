/* Chargement des modules nécessaires */
	
	// charge le module express
	var express = require('express');
	//créer l'objet router du module express
	var router = express.Router();
	//charge le module des actions pour ajouter user
	var user = require('./../actions/user')

	var model = require('./../bdd/model_bdd')('Ville');


/* Formulaire d'inscription */

router.get('/', function(req, res){
		model.select(['nomVille'], {}, function(results, error){
			res.render('inscription.ejs', 
 				{
				title: 'Inscription',
				ville: results
			});
		});
})

/* Ajout Utilisateur */

.post('/', user.addUser);

	




module.exports = router;
