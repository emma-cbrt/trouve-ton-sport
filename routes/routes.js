/* Chargement des modules nécessaires */
	
	// charge le module express
	var express = require('express');
	//créer l'objet router du module express
	var router = express.Router();

	var accueil = require('./accueil.js');
	var clubsport = require('./clubsport.js');
	var evenement = require('./evenement.js');
	// var partenaire = require('./partenaire.js');
	// var connexion = require('./connexion.js');
	var inscription = require('./inscription.js');
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
// .use('/Partenaire', partenaire)
// .use('/Connexion', connexion)
.use('/Inscription', inscription)
// .use('/Comptes/:idUser', enregistrerid, monompte)
// .use('/Comptes/:idUser/mesSport', enregistrerid, messporst)
// .use('/Comptes/:idUser/mesParetnaires', enregistrerid, mesparetnaires)
// .use('/Comptes/:idUser/mesEvenement', enregistrerid, mesevents)


module.exports = router


// 	/* Toutes les routes possibles à partir de la racine */

// //route pour un get à la racine (=page d'accueil)
// // router.get('/', function(req,res){
// // 	res.render('index.ejs');
// // })
// router.get('/', getaccueilpage)


// 	/* Page Club Sport */

// //Routes pour ClubSport 
// // .get('/ClubSport', function(req,res){
// // 	let query = "SELECT * FROM `ClubSport` ORDER BY id ASC"; // query database to get all the sport club

// //         // execute query
// //         db.query(query, (err, result) => {
// //             if (err) {
// //                 res.redirect('/');
// //             }
            
// // 		res.render('clubSport.ejs');, {
// //                 title: TTS | ClubSport,
// //                 club : result
// //             });
// // })

// //TODO get avec paramètre
// // .get('/ClubSport', function(req,res){
// // 	res.render('clubSport.ejs');
// // });)

// router.get('/ClubSport', getclublist)

// router.get('/ClubSport/:sport/:ville',getclublist)





// 	/* Page Evenement */

// //route pour Evenement
// // .get('/Evenement', function(req,res){
// // 	res.render('evenement.ejs');
// // })

// //TODO get avec paramètre
// // .get('/Evenement', function(req,res){
// // 	res.render('Evenement.ejs');
// // });)

// .get('/Evenement', getevenementlist)
// 	/* Page Partenaires */

// //route pour Partenaire
// // .get('/Partenaire', function(req,res){
// // 	//si co 
// // 	res.render('partenaire.ejs')
// // 	//sinon
// // 	res.render('connexion.ejs')
// // })

// //TODO
// //faire get avec des paramètres de villes et sport

// .get('/Partenaire', getpartenairelist)


// 	/* Page Connection */



// .get('/Connexion', getconnexionpage)

// // entrée du mail et mdp (connexion)
// // .put('/Connexion', function(req,res){
// // 	//si ok
// // 	res.render('index.ejs')
// // 	//sinon
// // 	res.render('connexion.ejs')
// // })

// .put('/Connexion', connect)
// //deconnexion
// .delete('/Connexion', deconnect)



// 	/* Page Utilisateur */

// //inscription (renvoit le formulaire d'inscription)
// // .get('/Inscription', function(req,res){
// // 	res.render('Inscription.ejs')
// // })

// .get('/Inscription', getuserform)


// //ajoute utilisateurs dans base de données
// .post('/Inscription', adduser)

// // page de connexion
// // .get('/Connexion', function(req,res){
// // 	//ajouter utilisateur à BD
// // 	res.redirect('connexion.ejs')
// // })

// //Page mon compte
// // .get('/Comptes/:iduser', function(req,res){
// // 	res.render('monCompte.ejs')
// // })


// .get('Comptes/:iduser', getuserpage) 

// //supprimer mon compte
// // .delete('/Comptes/:iduser', function(req,res){
// // 	//enlever user BD
// // 	res.redirect('index.ejs')
// // })

// .delete('/Comptes/:iduser', deletuser)


// // modifier mon compte
// // .put('/Comptes/:iduser', function(req,res){
// // 	//renvoyer entité entière à BD pour mise à jour
// // 	res.redirect('monCompte.ejs')
// // })

// .put('/Comptes/:iduser', updateuser)

// //Page mes sports, mes évenement et mes partenaires
// 	//mes sports
// // .get('/Comptes/:iduser/mesSports', function(req,res){
// // 	res.render('mesSports.ejs')
// // })

// //revient à afficher all from pratiquer where iduser = :iduser

// .get('/Comptes/:iduser/mesSports', getmysports)


// //Ajout d'un sport de l'utilisateur
// // .put('/Comptes/:iduser/mesSports', function(req,res){
// // 	res.render('mesSports.ejs')
// // })
// // Revient à créer une entité pratique
// .post('/Comptes/:iduser/mesSports', updatemysports)


// //Suppression d'un sport de l'utilisateur
// .delete('/Comptes/:iduser/mesSports', function(req,res){
// 	res.render('mesSports.ejs')
// })
// 	//mes evenements
// .get('/Comptes/:iduser/mesEvenements', function(req,res){
// 	res.render('mesEvenements.ejs')
// })

// //formulaire de modification d'un événement de l'utilisateur (récupère le formulaire prés rempli
// //par les paramètres se l'event) 
// .get('/Comptes/:iduser/mesEvenements/NewEvenement/:idevent', function(req,res){
// 	res.render('newEvenement.ejs');
// })

// .put('/Comptes/:iduser/mesEvenements/NewEvenement/:idevent', function(req,res){
// 	res.render('mesEvenements.ejs');
// })

// //formulaire ajout événement 
// .get('/Comptes/:iduser/mesEvenements/NewEvenement', function(req,res){
// 	res.render('newEvenement.ejs');
// })

// //ajout événement 
// .post('/Comptes/:iduser/mesEvenements/NewEvenement', function(req,res){
// 	res.render('mesEvenements');
// })

// //Suppression d'un evenement créé par l'utilisateur
// .delete('/Comptes/:iduser/mesEvenements/:idevent', function(req,res){
// 	res.render('mesEvenements.ejs')
// })

// 	//mes partenaires
// .get('/Comptes/:iduser/mesPartenaires', function(req,res){
// 	res.render('mesPartenaires.ejs')
// })
// //Ajout d'un partenaire pour l'utilisateur
// .put('/Comptes/:iduser/mesParetnaires', function(req,res){
// 	res.render('mesPartenaires.ejs')
// })
// //Suppression d'un partenaire de l'utilisateur
// .delete('/Comptes/:iduser/mesEvenements', function(req,res){
// 	res.render('mesPartenaires.ejs')
// });


// //rendre le module accessible aux autres pages
// module.exports = router;