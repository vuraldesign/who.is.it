const mongoose = require('mongoose');
var url = "YOUR_LOCAL_CONNECTION_STRING";
const mongo_options = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 50,
    poolSize: 10,
    bufferMaxEntries: 0,
    useNewUrlParser: true
};
var db;
module.exports.connect = function () {
    return new Promise(function (resolve, reject) {
        mongoose.connect(url, mongo_options);
        db = mongoose.connection;
        db.on('error', function (err) {
            return reject(err);
        });
        return resolve(db);
    })
}