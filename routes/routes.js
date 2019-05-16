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
	res.render('clubSport.ejs');
})

//TODO get avec paramètre
// .get('/ClubSport', function(req,res){
// 	res.render('clubSport.ejs');
// });)

	/* Page Evenement */

//route pour Evenement
.get('/Evenement', function(req,res){
	res.render('evenement.ejs');
})

//TODO get avec paramètre
// .get('/Evenement', function(req,res){
// 	res.render('Evenement.ejs');
// });)


//seulement si client connecté
.get('/Evenement/NewEvenement', function(req,res){
	res.render('newEvenement.ejs');
})

.post('/Evenement/NewEvenement', function(req,res){
	//ajouter événement à la base de donnée
	res.redirect('evenement.ejs')
})

	/* Page Partenaires */

//route pour Partenaire
.get('/Partenaire', function(req,res){
	//si co 
	res.render('partenaire.ejs')
	//sinon
	res.render('connexion.ejs')
})

//TODO
//faire get avec des paramètres de villes et sport

	/* Page Inscription/Connection */

//inscription (renvoit le formulaire d'inscription)
.get('/Inscription', function(req,res){
	res.render('Inscription.ejs')
})

//enregitre données utilisateurs dans base de données
.post('/Inscription', function(req,res){
	//ajouter utilisateur à BD
	res.redirect('index.ejs')
})

// page de connexion
.get('/Connexion', function(req,res){
	//ajouter utilisateur à BD
	res.redirect('connexion.ejs')
})

// entrée du mail et mdp (connexion)
.put('/Connexion', function(req,res){
	//si ok
	res.render('index.ejs')
	//sinon
	res.render('connexion.ejs')
})

//deconnexion
.delete('/Connexion', function(req,res){
	res.render('index.ejs')
})



	/* Page Utilisateur */

//Page mon compte
.get('/Comptes/:iduser', function(req,res){
	res.render('monCompte.ejs')
})

.delete('/Comptes/:iduser', function(req,res){
	//enlever user BD
	res.redirect('index.ejs')
})

.put('/Comptes/:iduser', function(req,res){
	//renvoyer entité entière à BD pour mise à jour
	res.redirect('monCompte.ejs')
})

//Page mes sports et mes évenement et mes partenaires
	//mes sports
.get('/Comptes/:iduser/mesSports', function(req,res){
	res.render('mesSports.ejs')
})
//Ajout d'un sport de l'utilisateur
.put('/Comptes/:iduser/mesSports', function(req,res){
	res.render('mesSports.ejs')
})
//Suppression d'un sport de l'utilisateur
.delete('/Comptes/:iduser/mesSports', function(req,res){
	res.render('mesSports.ejs')
})
	//mes evenements
.get('/Comptes/:iduser/mesEvenements', function(req,res){
	res.render('mesEvenements.ejs')
})
//Ajout d'un evenement créé par l'utilisateur
.put('/Comptes/:iduser/mesEvenements', function(req,res){
	res.render('mesEvenements.ejs')
})
//Suppression d'un evenement créé par l'utilisateur
.delete('/Comptes/:iduser/mesEvenements', function(req,res){
	res.render('mesEvenements.ejs')
})
	//mes partenaires
.get('/Comptes/:iduser/mesPartenaires', function(req,res){
	res.render('mesPartenaires.ejs')
})
//Ajout d'un partenaire pour l'utilisateur
.put('/Comptes/:iduser/mesParetnaires', function(req,res){
	res.render('mesPartenaires.ejs')
})
//Suppression d'un partenaire de l'utilisateur
.delete('/Comptes/:iduser/mesEvenements', function(req,res){
	res.render('mesPartenaires.ejs')
});


//rendre le module accessible aux autres pages
module.exports = router;