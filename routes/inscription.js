/* Chargement des modules nécessaires */
	
	// charge le module express
	var express = require('express');
	//créer l'objet router du module express
	var router = express.Router();


/* Formulaire d'inscription */

router.get('/', function(req,res) {

	let queryV = "SELECT nomVille FROM Ville";

        // execute query
        bdd.query(queryV, (err, result) => {
            if (!err) {
            	res.render('inscription.ejs', 
 					{
            			title: 'Inscription',
            			ville: result
         			}
         		);
            }
            else {
                res.redirect('/');
            }
        });
});

/* Ajout Utilisateur */

.post('/', function(req, res) {
	/* Check the input */
    if (!req.body.nom || !req.body.prenom || !req.body.tel_user || !req.body.email || !req.body.mdp) {
        console.log(req.body)
        errors.addErrorMessage('40001', "Bad Request - Your request is missing parameters");
    }
    if (req.body.mdp && req.body.mdp < 5) {
        errors.addErrorMessage('40003', "Bad Request - Your password length has to be > 4");
    }

    const emailValidator = require('email-validator');

    if (req.body.email_user && !emailValidator.validate(req.body.email_user)) {
        errors.addErrorMessage('40004', "Bad Request - Invalid Email");
    }
    else {
        /* Hash the password */
        bcrypt.hash(req.body.mdp, 10, function (err, hash) {

            req.body.mdp = hash;

            /* Creates the user */
            
            });
        }
    });

/* Check the input */
    if (!req.body.p || !req.body.password_user || !req.body.email_user) {
        console.log(req.body)
        errors.addErrorMessage('40001', "Bad Request - Your request is missing parameters");
    }
    if (req.body.pseudo_user && req.body.pseudo_user.length < 4) {
        errors.addErrorMessage('40002', "Bad Request - Your pseudo length has to be > 3");
    }
    if (req.body.password_user && req.body.password_user.length < 5) {
        errors.addErrorMessage('40003', "Bad Request - Your password length has to be > 4");
    }

    const emailValidator = require('email-validator');
    if (req.body.email_user && !emailValidator.validate(req.body.email_user)) {
        errors.addErrorMessage('40004', "Bad Request - Invalid Email");
    }




module.exports = router;
