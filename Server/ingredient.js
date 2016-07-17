var mongoose = require ('mongoose');
var schema = mongoose.Schema;


var ingredientSchema = new schema ({
    _id : {type: Number, required:true, unique:true},
    name: String,
    url: String,
    desc: String
}, {collection: 'ingredients'});

var ingredient = mongoose.model ('ingredient', ingredientSchema);

module.exports = ingredient;