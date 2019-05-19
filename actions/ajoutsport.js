//action pour la table pratiquer

// charge le module bcrypt pour crypter les mdp


var model = require('./../bdd/model_bdd')('Pratiquer');


const pratiquer = {};


pratiquer.addSport = (req, res,next) => {
	model.ajout(req.body, {}, (result,err) => {
        res.render('ajoutsport.ejs', {
            title : 'Inscription',
            idUser : req.body.idUser
        });
    });
