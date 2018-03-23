var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./message');

var schema = new Schema({
    name: {type: String, required: true},
    imgUrl: {type: String, required: true},
    // message: {type: Schema.Types.ObjectId, ref: 'Message'}
});


module.exports = mongoose.model('Channel', schema);
