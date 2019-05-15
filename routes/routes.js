/* Chargement des modules nécessaires */
	
	// charge le module express
	var express = require('express');
	//créer l'objet router du module express
	var router = express.Router();
/* Fin chargement */

	/* Page Accueil */

//route pour un get à la racine (=page d'accueil)
router.get('/', function(req,res){
	res.render('index.ejs');
})

	/* Page Club Sport */

//Routes pour ClubSport 
.get('/ClubSport', function(req,res){
	res.render('ClubSport.ejs');
})

//TODO get avec paramètre
// .get('/ClubSport', function(req,res){
// 	res.render('ClubSport.ejs');
// });)

	/* Page Evenement */

//route pour Evenement
.get('/Evenement', function(req,res){
	res.render('Evenement.ejs');
})

//TODO get avec paramètre
// .get('/Evenement', function(req,res){
// 	res.render('Evenement.ejs');
// });)


//seulement si client connecté
.get('/Evenement/NewEvenement', function(req,res){
	res.render('NewEvenement.ejs');
})

.post('/Evenement/NewEvenement', function(req,res){
	//envoyer à la base de donnée
	res.redirect('Evenement.ejs')
})

	/* Page Utilisateur */

//inscription (renvoit le formulaire d'inscription)
.get('/Inscription', function(req,res){
	res.render('Inscription.ejs')
});

//enregitre données utilisateurs dans base de données
// .post()





//rendre le module accessible aux autres pages
module.exports = router;