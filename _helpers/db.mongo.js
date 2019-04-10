const mongoose = require('mongoose');
var url = "YOUR_LOCAL_CONNECTION_STRING";
var url = 'mongodb://localhost:27017/?3t.ssh=true&3t.sshAddress=185.169.52.54&3t.sshPort=22&3t.sshAuthMode=password&3t.sshUser=ortak&3t.sshPassword=Caha*0192!'; //TODO
const mongo_options = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 100,
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