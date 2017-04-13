var mongoose = require('mongoose');
mongoose.connect('mongodb://wee7:0413@ds111549.mlab.com:11549/w7-hw');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  firstname : String,
  lastname  : String
});
module.exports = mongoose.model('Person', personSchema);
