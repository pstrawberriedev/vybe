var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

//Love Notes
var Comment = new Schema({
    title : String,
    name : String
});
mongoose.model('comments', Comment);

//Vybes
var Vybe = new Schema({
    amount : Number,
    timestamp : Number
});
mongoose.model('vybes', Vybe);

mongoose.connect('mongodb://localhost/vybe_dev7');