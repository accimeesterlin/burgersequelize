/**
 * Created by esterlingaccime on 5/5/17.
 */

var express =require("express");
var router = express.Router();


var db = require("../models");

router.get("/", function (req, res) {
    db.Burger.findAll({ raw: true}).then(function (data) {
        var burger =  data;
        console.log(burger);
        res.render("index", {burger: burger});
    });


});



// router.get("/api/data", function (req, res) {
//     db.Burger.findAll({}).then(function (data) {
//         var burger = data.get();
//         res.render(data);
//     });
// });

router.put("/add", function (req, res) {
    var data = req.body;
    var date = new Date();

    console.log(req.body);

    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: true,
        date:date
    }).then(function (data) {
        res.redirect("/")
    });


});



router.put("/:id", function (req, res) {
    var id = req.params.id;
    console.log(id);

    db.Burger.update({
        devoured: false
    },{
        where:{
            id: id
        }
    });
    res.redirect("/");

});


module.exports = router;