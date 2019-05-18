/* Chargement des modules nécessaires */
	
	// charge le module express
	var express = require('express');
	//créer l'objet router du module express
	var router = express.Router();

/* Affiche la liste des Evenements */
router.get('/', function(req,res){
    // query database to get all the sport club
	let queryCS = "SELECT nomEvent, descEvent, dateEvent, nomVille, nomS FROM Evenement E, Ville V, Sport S WHERE V.idVille = E.idVille AND S.idSport = E.idSport"; 

        // execute query
        bdd.query(queryCS, (err, result) => {
            if (!err) {
            	res.render('evenement.ejs', 
                    {
                        title: 'Evenements',
                        event : result
                    }
                );
            }
            else {
                res.redirect('/');
            }
        });
            
});

/* Exporte le module pour le router */
module.exports = router;