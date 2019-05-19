/* Chargement des modules nécessaires */
	
	// charge le module express
	var express = require('express');
	//créer l'objet router du module express
	var router = express.Router();
    var eventActions = require ('./../actions/evenement');



/* Affiche la liste des Evenements */
router.get('/', eventActions.listEvent)

/* Affiche formulaire pour ajouter evenement */

// .get('/:idUser/AjoutEvenement', eventAction.listEvent)

/* Exporte le module pour le router */
module.exports = router;