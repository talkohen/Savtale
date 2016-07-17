var mongoose = require ('./database');
var Ingredient = require ('./ingredient');
var illness = require ('./illness');
var meal = require ('./meal');


exports.getIngredientsData = function (req, res) {

    Ingredient.find ({}).
    where('Ingredient').ne ('PRIVATE').
    exec (function (err, docs) {
        Data = docs;
        console.log ('docs: ' + docs);
        res.json (docs);
        return;
    });
}



exports.getIngredientById = function (req, res) {

    Ingredient.find ({id : ingredId}).
    where('Ingredient').ne ('PRIVATE').
    exec (function (err, docs) {
        Data = docs;
        console.log ('docs: ' + docs);
        res.json (docs);
        return;
    });
}


exports.getIllnesssData = function (req, res) {


    illness.find ({}).populate('ingrs').
    where('illness').ne ('PRIVATE').
    exec (function (err, docs) {
       
        Data = docs;
        console.log ('docs: ' + docs);
        res.json (docs);
        return;
    });
}

exports.getMealsData = function (req, res) {


    meal.find ({}).populate('ingrs').
    where('meal').ne ('PRIVATE').
    exec (function (err, docs) {
       
        Data = docs;
        console.log ('docs: ' + docs);
        res.json (docs);
        return;
    });
}


