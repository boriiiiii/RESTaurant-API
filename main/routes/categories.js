var express = require('express');
const mysql = require("mysql");
var router = express.Router();
const basicAuth = require('basic-auth');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'restaurant_database'
});

// Middleware for Basic Authentication
function authMiddleware(req, res, next) {
    const user = basicAuth(req);

    if (!user || user.name !== 'admin' || user.pass !== 'admin') {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        res.sendStatus(401); // Unauthorized
        return;
    }

    // If authentication is successful, continue to the next middleware
    next();
}


/* GET categories with filtering. */
router.get('/', function (req, res, next) {
    const categorie_name = req.query.categorie_name;

    let sqlQuery = 'SELECT * FROM restaurant_database.categories WHERE 1=1';

    if (categorie_name) {
        sqlQuery += ` AND categorie_name = '${categorie_name}'`;
    }

    con.query(sqlQuery, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Change parameters." });
        } else {
            res.json(result);
        }
    });
});

router.get('/:id_categorie', function (req, res, next) {
    const id_categorie = req.params.id_categorie;

    let sqlQuery = `SELECT * FROM restaurant_database.categories WHERE id_categorie = ${id_categorie}`;

    con.query(sqlQuery, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "An error occurred" });
        } else {
            res.json(result);
        }
    });
});

router.post('/post', authMiddleware,(req,res) => {
    const id_categorie = req.body.id_categorie;
    const categorie_name = req.body.categorie_name;

    con.query('INSERT INTO `categorie` VALUES(?,?)', [id_categorie, categorie_name], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send('CATEGORIE POSTED !');
        }
    });
});

router.put('/put/:id_categorie', authMiddleware,(req, res) => {
    const id_categorie = req.params.id_categorie;
    const new_categorie_name = req.body.categorie_name;

    con.query('SELECT categorie_name FROM categories WHERE id_categorie = ?', [id_categorie], (err, result) => {
        if (err) {
            console.log(err);
            res.send('Erreur lors de la récupération de la catégorie existante');
        } else {
            const categorie_name = result[0].categorie_name;

            con.query('UPDATE `categories` SET categorie_name = ? WHERE id_categorie = ?', [new_categorie_name, id_categorie], (err, result) => {
                if (err) {
                    console.log(err);
                    res.send('Erreur CATEGORIES');
                } else {
                    con.query('UPDATE `items` SET categorie_name = ? WHERE categorie_name = ?', [new_categorie_name, categorie_name], (err, result) => {
                        if (err) {
                            console.log(err);
                            res.send('Erreur ITEMS');
                        } else {
                            res.send('CATEGORIE ET ITEMS MIS À JOUR !');
                        }
                    });
                }
            });
        }
    });
});


router.delete('/delete/:id_categorie', authMiddleware,(req, res) => {
    const id_categorie = req.params.id_categorie;

    con.query('SELECT categorie_name FROM categories WHERE id_categorie = ?', [id_categorie], (err, result) => {
        if (err) {
            console.log(err);
            res.send('Erreur lors de la récupération de la catégorie existante');
        } else {
            const categorie_name = result[0].categorie_name;
            console.log(categorie_name)

            con.query('DELETE FROM `categories` WHERE id_categorie = ?', id_categorie, (err, result) => {
                if (err) {
                    console.log(err);
                    res.send('Erreur');
                } else {
                    con.query('DELETE FROM `items` WHERE categorie_name = ?', categorie_name, (err, result) => {
                        if (err) {
                            console.log(err);
                            res.send('Erreur ITEMS');
                        } else {
                            res.send('TOUT DELETE COMME IL FAUT !');
                        }
                    });
                }
            });
        }
    });
});


module.exports = router;
