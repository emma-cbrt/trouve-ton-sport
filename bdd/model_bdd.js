/* Création du format WHERE pour les requête, format choisi : tableau de valeur */
  //   ==> "WHERE att = value AND att2 = value2 ..."
 
  // à utiliser dans une requete :
  //            query('SELECT * FROM table' + sql, tabcondi)
 
  // 1er paramètre where  un tableau de condition (exemple) :  {att1: value1, att2: value2}
 
  // 2eme paramètre next fonction callback qui a pour paramètre (sql, tabcondi) :
  //                  - sql contient le text "WHERE field1 = ? AND field2 = ?"
  //                  - tabcondi contient le tableau [value1, value2]
 
const formatWhere = (where, next) => {
    let whereVal = [];
    let whereSql = ' ';
    let and = 'WHERE ';
    for (let att in where) {
        whereSql += and + att + ' = ?';
        whereVal.push(where[att]);
        and = ' AND ';
    }
    next(whereSql, whereVal);
}

/* Création du format pour ajouter à la base de donnée */

  // à utiliser dans une requete :
  //            query('INSERT INTO table' + sql, tabval)
 
  // 1er paramètre val un tableau de valeur : {att1: value1, att2: value2}
 
  // 2eme paramètre next fonction de call back qui a pour paramètre (sql, tabval) :
  //                  - sql contient le text "(att1, att2) VALUES (?,?)"
  //                  - tabval contient le tableau [value1, value2]
 
const formatValAjout = (val, next) => {
    let attSql = ' ';
    let valSql = ' VALUES ';
    let valatt = [];
    let sep = '(';
    for (let att in val) {
        attSql += sep + att;
        valSql += sep + '?';
        valatt.push(val[att]);
        sep = ', ';
    }
    attSql += ')';
    valSql += ')';
    attSql += valSql;
    next(attSql, valatt);
}

/* Création du format pour les requête UPDATE */
 
  // à utiliser dans une requete :
  //            query('UPDATE table' + sql, tabval)
 
  // pareil que pour les autres format
 
const formatValModif = (val, next) => {
    let sql = ' SET ';
    let tabval = [];
    let sep = '';
    for (let att in val) {
        sql += sep + att + " = ?";
        tabval.push(val[att]);
        sep = ', ';
    }
    next(sql, tabval);
}

/* Création du module model pour afficher, mettre à jour, ajouter, supprimer des tables de la base */
module.exports = (table) => {
    var model = {};

    /* Afficher toutes les lignes d'une table */
      // Reads all the rows in the table
      // paramètre next  fonction de callback après que la requete soit exécutée : (res, err) => {};
      //                      si err non vide alors pb dans la requete
     
     
    model.selectAll = (next) => {
        pool.query('SELECT * FROM ' + table, (error, results, att) => {
            if (error) {
                throw error;
            } else if (next) {
                next(results, error);
            }
        });
    };

    /* Afficher les lignes du tableau qui correspondent aux paramètre du where */
     
      // parmètre select    tableau des attributs sélectionnés'
     
     
      // paramètre where     tableau des conditions
     
      // tableau vide si pas de condition
     
      // paramètre next  fonction de callback après que la requete soit exécutée : (res, err) => {};
      //                      si err non vide alors pb dans la requete
     
    model.select = (select, where, next) => {
        formatWhere(where, (whereSql, val) => {
            let sql = 'SELECT ' + select.join(', ') + ' FROM ' + table + whereSql;
            bdd.query(sql, val, (error, results, att) => {
                next(results, error);
            });
        });
    };

    /* Ajout d'une ligne dans une table */
     
      // paramètre val  tableau de att : valeur
     
    model.ajout = (val, where, next) => {
        formatWhere(where, (whereSql, tabcondi) => {
            formatValAjout(val, (insertSql, tabval) => {
                let sql = 'INSERT INTO ' + table + insertSql + whereSql;
                bdd.query(sql, tabval.concat(tabcondi), (error, results, att) => {
                    next(results, error);
                });
            });
        });
    }

    /* Mise à jour dans la table en fonction des conditions */

    model.modif = (val, where, next) => {
        if (!util.isObjectEmpty(val)) {
            formatWhere(where, (whereSql, tabcondi) => {
                formatValModif(val, (updateSql, tabval) => {
                    let sql = 'UPDATE ' + table + updateSql + whereSql;
                    bdd.query(sql, tabval.concat(tabcondi), (error, results, fields) => {
                        next(results, error);
                    });
                });
            });
        } else {
            next ([]);
        }

    }


    /* Suppresion dans la table en fonction conditions */
     
    model.suppr = (where, next) => {
        formatWhere(where, (whereSql, tabcondi) => {
            let sql = 'DELETE FROM ' + table + whereSql;
            bdd.query(sql, tabcondi, (error, results, fields) => {
                next(results, error);
            });
        });
    }


    return model;
}