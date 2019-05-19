const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./../bdd/model_bdd')('Utilisateur');

const co = {};

/*Récupère le token du header */
  
 //  Header format
 // Authorization : Bearer <access_token>


co.getToken = (req, res, next) => {
    /* Get the auth header value */
    const bearerHeader = req.headers['authorization'];

    /* Check if bearer is undefined */
    if (typeof bearerHeader !== 'undefined') {
        /* Split at the space */
        const bearer = bearerHeader.split(' ');

        /* Get token from array */
        const bearerToken = bearer[1];

        /* Set the token */
        req.token = bearerToken;

        next();
    } else {
        /* Forbidden */
        console.log('interdit')
    }
}

/* Vérifie le token */

co.verifyToken = (req, res, next) => {
    let errors = errorAction();
    if (!req.token) {
        console.log("Inaccessible Token : call co.getToken before");
    }
    jwt.verify(req.token, config.jwtSecret, (err, data) => {
        if (err) {
            errors.addErrorMessage('40302', 'Forbidden - Invalid token');
            errors.sendErrors(res, 403);
        }
        else {
            next(data);
        }
    });
}

/* Valide le token */
co.validateToken = (req, res, next) => {
    co.getToken(req, res, () => {
        co.verifyToken(req, res, (data) => {
            req.dataToken = data;
            next();
        });
    });
}

/* Connecte le client 
 * Login the user
 * Check if the pseudo and password in the body match the data in db, and generate a token if so
 * Sends a 403 error else.
 */
co.login = (req, res, next) => {
    let errors = errorAction();

    // check user and password and take data relative to it
    const pseudo = req.body.pseudo_user;
    const password = req.body.password_user;

    // Fetch the data in db
    User.select(['id_user', 'pseudo_user', 'password_user'], {pseudo_user: pseudo}, (results, err) => {

        if (!err && results.length > 0) {
            // Compare the passwords
            bcrypt.compare(password, results[0].password_user, (err, resEncrypt) => {
                if (resEncrypt) {
                    const user = {
                        id_user: results[0].id_user,
                        pseudo_user: results[0].pseudo_user
                    }
                    // Creates the token
                    jwt.sign({user}, config.jwtSecret, (err, token) => {
                        res.json({token});
                    });
                } else {
                    console.log('mot de passe invalide')
                }
            });
        } else {
            console.log('Email invalide')
        }
    });
}

co.logout = () => {

}

module.exports = co;