var mongoose = require ('mongoose');
var schema = mongoose.Schema;


var illnessSchema = new schema ({
    _id : {type: Number, required:true, unique:true},
    name: String,
    desc: String,
    ingrs: [{type: Number, ref: 'ingredient'}],
    url: String
   
}, {collection: 'illness'});

var illness = mongoose.model ('illness', illnessSchema);

module.exports = illness;