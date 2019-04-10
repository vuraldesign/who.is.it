const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Domain5Schema = new Schema({
    domain: {type: String, required: false, max:100},
    count: {type:Number, required: false}
});

module.exports = mongoose.model('Domain5', Domain5Schema);