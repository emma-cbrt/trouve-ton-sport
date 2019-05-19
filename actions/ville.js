const model = require('./../bdd/model_bdd')('Ville');


//action pour les event
const ville = {};

/**
 * Sends the users list (id and pseudo)
 */
ville.listVille = (req, res,next) => {

	model.select(['nomVille'], {}, function(results, error){
            res.json(results);
        });

}



module.exports = ville;