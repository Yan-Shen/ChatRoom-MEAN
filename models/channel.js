var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Message = require('./message');

var schema = new Schema({
    name: {type: String, required: true},
    imgUrl: {type: String, required: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
    // message: {type: Schema.Types.ObjectId, ref: 'Message'}
},
{ usePushEach: true });


module.exports = mongoose.model('Channel', schema);
