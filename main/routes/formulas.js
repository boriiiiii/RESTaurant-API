var express = require('express');
const mysql = require("mysql");
var router = express.Router();
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'restaurant_database'
});

/* GET formulas with filtering. */
router.get('/', function (req, res, next) {
    const formula_name = req.query.formula_name; // Récupère le paramètre formula_name de l'URL
    const categorie_name = req.query.categorie_name; // Récupère le paramètre categorie_name de l'URL
    const price = req.query.price; // Récupère le paramètre price de l'URL

    let sqlQuery = 'SELECT * FROM restaurant_database.formulas WHERE 1=1';

    if (formula_name) {
        sqlQuery += ` AND formula_name = '${formula_name}'`;
    }
    if (categorie_name) {
        sqlQuery += ` AND categorie_name = '${categorie_name}'`;
    }
    if (price) {
        sqlQuery += ` AND price = ${price}`;
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

router.get('/:id_formula', function (req, res, next) {
    const id_formula = req.params.id_formula;

    let sqlQuery = `SELECT * FROM restaurant_database.formulas WHERE id_formula = ${id_formula}`;

    con.query(sqlQuery, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "An error occurred" });
        } else {
            res.json(result);
        }
    });
});

router.post('/post', (req,res) =>{
    const id_formula = req.body.id_formula;
    const formula_name = req.body.categorie_name;
    const categorie_name = req.body.categorie_name;
    const price = req.body.price;

    con.query('INSERT INTO `formulas` VALUES(?,?,?,?)',[id_formula,formula_name,categorie_name,price],(err,result) =>{
        if(err){
            console.log(err)
        }else{
            res.send('FORMULA POSTED !')
        }
    })
})

router.put('/put/:id_formula',(req,res)=>{
    const id_formula = req.params.id_formula;
    const new_formula_name = req.body.formula_name;
    const new_categorie_name = req.body.categorie_name;
    const new_price = req.body.price;

    con.query('UPDATE `formulas` SET formula_name = ?, categorie_name = ?, price = ? WHERE id_formula = ?',[new_formula_name,new_categorie_name,new_price,id_formula],(err,result) =>{
        if(err){
            console.log(err)
        }else{
            res.send('FORMULA UPDATED !')
        }
    })
})

router.delete('/delete/:id_formula',(req,res)=>{
    const id_formula = req.params.id_formula

    con.query('DELETE FROM `formulas` WHERE id_categorie = ?', id_formula,(err,result) =>{
        if (err){
            console.log(err)
        }else{
            res.send("THIS FORMULA GOT DELETED !")
        }
    })
})

module.exports = router;
