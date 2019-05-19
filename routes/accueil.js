/* Chargement des modules nécessaires */
	
	// charge le module express
	var express = require('express');
	//créer l'objet router du module express
	var router = express.Router();
	

router.get('/', function(req,res){
 	res.render('index.ejs', {
                title: 'Accueil'
            });
 });

module.exports = router;