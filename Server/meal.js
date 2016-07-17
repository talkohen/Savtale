var mongoose = require ('mongoose');
var schema = mongoose.Schema;


var mealSchema = new schema ({
    _id : {type: String, required:true, unique:true},
    category : String,
    title: String,
    res_name: String,
    desc: String,
    ingrs: [{type: Number, ref: 'ingredient'}],
    url: String,
    price: String,
    time: String
   
}, {collection: 'meals'});

var meal = mongoose.model ('meal', mealSchema);

module.exports = meal;