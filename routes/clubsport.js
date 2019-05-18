/* Chargement des modules nécessaires */
	
	// charge le module express
	var express = require('express');
	//créer l'objet router du module express
	var router = express.Router();


router.get('/', function(req,res){
	let queryCS = "SELECT nomCS, descCS, nomVille, idCS FROM ClubSport C, Ville V WHERE V.idVille = C.idVille"; // query database to get all the sport club
	let queryS = "SELECT nomS FROM Sport";
	let queryV = "SELECT nomVille FROM Ville";
        // execute query
        bdd.query(queryCS, (err, result) => {
            if (!err) {
            	let club = result;
            	bdd.query(queryS, (err, result) => {
            		if (!err) {
            			let sport = result;
            			bdd.query(queryV, (err,result)=> {
            				if(!err) {
            					let ville = result
            					res.render('clubSport.ejs', {
	                			title: 'ClubSport',
	                			club : club,
	                			sport : sport,
	                			ville : ville 
            					});

            				}
            				else {
            					//onverra
            				}
            			})
            		}
            		else {
            			//onverra
            		}
            	})
            }
            else {
                res.redirect('/');
            }
        });
            
});

// .get('/ClubSport/:sport');

module.exports = router;