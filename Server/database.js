var mongoose = require ('mongoose');
config = {
    mongoUrl : 'mongodb://db_usr:db_pass@ds013574.mlab.com:13574/savtale'
}

var options = {
    server : {
        auto_reconnect :true,
    }
};

mongoose.connect (config.mongoUrl, options);
db = mongoose.connection;


db.on ('error', function (err) {
    console.log ('Mongoose : Error: ' + err);
});

db.on ('open', function () {
    console.log ('Mongoose: connection established');
})

db.on ('disconnected', function () {
    console.log ('Mongoose: Connection stopped, reconnect');
    mongoose.connect (config.mongoUurl, options);
});

db.on ('reconnected', function () {
    console.info ('Mongoose reconnected!');
});