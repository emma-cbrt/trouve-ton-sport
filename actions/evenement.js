//action pour les event
const event = {};

/**
 * Sends the users list (id and pseudo)
 */
event.listEvent = (req, res,next) => {

	let queryCS = "SELECT nomEvent, descEvent, dateEvent, nomVille, nomS FROM Evenement E, Ville V, Sport S WHERE V.idVille = E.idVille AND S.idSport = E.idSport";
	bdd.query(queryCS, (err, result, next) => {
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

}



module.exports = event;