//action pour les club
const club = {};

/**
 * Sends the users list (id and pseudo)
 */
club.listClub = (req, res,next) => {

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

}



module.exports = club;