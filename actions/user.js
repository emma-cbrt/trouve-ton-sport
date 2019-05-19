//action pour les user

// charge le module bcrypt pour crypter les mdp
var bcrypt = require('bcrypt');

var model = require('./../bdd/model_bdd')('Utilisateur');

var co = require('./connexion');


const user = {};

/**
 * Sends the users list (id and pseudo)
 */
user.addUser = (req, res,next) => {

	
    /* Vérifier valeur d'entrée  */
    if (!req.body.nomUser || !req.body.prenomUser || !req.body.telUser || !req.body.emailUser || !req.body.mdpUser|| !req.body.idVlle) {
        console.log(req.body);
    }

    // charge module email validator pour verifier email user 
    const emailValidator = require('email-validator');

    if (req.body.emailUser && !emailValidator.validate(req.body.emailUser)) {
        res.status(40004).send('Raté, votre email est invalide!');
    }
    else {
        /* Crypte le mot de passe */
        bcrypt.hash(req.body.mdpUser, 10, function (err, hash) {

            req.body.mdpUser = hash;


        // Vérification de email unique et ajout de l'utilisateur à la base de donnée
            
                model.select(['emailUser'], {'emailUser': req.body.emailUser}, (resultat,err) => {
                    if (resultat.length > 0){
                        res.render('index.ejs', {
                                title : 'Accueil',
                            });                     
                    }
                    else{
                        model.ajout(req.body, {}, (result,err) => {
                            res.render('ajoutsport.ejs', {
                                title : 'Inscription',
                                idUser : req.body.idUser
                            });
                        });
                    }
                });
                        
        });
    }

}

user.getUser = (req, res, next) => {
    let errors = errorAction();
    model.select(['id_user', 'pseudo_user', 'email_user'], {'id_user': req.idUser}, (results, error) => {
        if (!error && results.length > 0) {
            res.json(results[0]);
        } else {
           console.log('n\'existe pas');
        }
    });
}

/* Vérifie le token de l'utilisateur et si il est bon 
 * Check in the token of the user if he has the rights update the user in req.idUser (the user is himself OR he is an admin
 * executes next if it is the case
 * return a 403 if not
 */
user.checkRightUser = (req, res, next) => {
    // Verifies the token
    co.verifyToken(req, res, (coData) => {

        if (coData.user.id_user != req.idUser) {
            console.log('vou n\'avez pas le droit d\'afficher cette page');
        } else {
            next();
        }
    });
}



module.exports = user;