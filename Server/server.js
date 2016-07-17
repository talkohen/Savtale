var express= require ('express');
var app = express();
var controller = require ('./controller');
var Ingredient = require ('./ingredient');
var Illness = require ('./illness');
var Meal = require ('./meal');
var port = process.env.PORT || 3000;

app.set ('port',port);
app.use ('/' , express.static ('./public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  app.set ('json spaces', 4);
  res.set ("Content-Type", "application/json");
  next();
});

app.get ('/getIngredientsData', controller.getIngredientsData);
app.get ('/getIllnessData', controller.getIllnesssData);
app.get ('/getMealsData', controller.getMealsData);

app.get ('/getIngredientsData/:ingredId', function (req,res) {

var ingred = req.params.ingredId;
console.log('finding ingredient by id...');

 Ingredient.find({ _id : ingred} ,function(err,ingredient){
            if(err) throw err;
            res.json(ingredient);
        });
});


app.get ('/getIllnessData/:illnessId', function (req,res) {

var illness = req.params.illnessId;
console.log('finding illness by id...');

 Illness.find({ _id : illness} ,function(err,illness){
            if(err) throw err;
            res.json(illness);
        });
});


app.get ('/getMealsData/:mealId', function (req,res) {

var meal = req.params.mealId;
console.log('finding meal by id...');

 Meal.find({ _id : meal} ,function(err,meal){
            if(err) throw err;
            res.json(meal);
        });
});

app.get ('/getMealsData/category/:mealCategory', function (req,res) {

var mealCat = req.params.mealCategory;
console.log('finding meal by id...');

 Meal.find({ category : mealCat} ,function(err,meal){
            if(err) throw err;
            res.json(meal);
        });
});


app.all ('*', function (req,res) {
    res.send ("Page not found! Please follow the api");
});

app.listen (port);
console.log ("service is listening on port " + port);
