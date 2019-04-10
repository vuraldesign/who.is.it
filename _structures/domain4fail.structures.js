const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Domain4FailSchema = new Schema({
    domain: {type: String, required: false, max:100},
    count: {type:Number, required: false}
});

module.exports = mongoose.model('Domain4Fail', Domain4FailSchema);