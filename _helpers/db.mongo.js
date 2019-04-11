var tunnel = require('tunnel-ssh');
const mongoose = require('mongoose');
var config = {  username:'ssh_user_name', host:'remote_server_ip', agent : process.env.SSH_AUTH_SOCK, port:22,dstPort:27017,password:'ssh_password'};
var url = 'mongodb://localhost/whoisit';
const mongo_options = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 50,
    poolSize: 10,
    bufferMaxEntries: 0,
    useNewUrlParser: true
};
module.exports.connect = function () {
    return new Promise(function (resolve, reject) {
        var server = tunnel(config, function (error, server) {
            if(error){
                return reject("SSH connection error:" + error);
            }
            mongoose.connect(url,mongo_options);
        
            var db = mongoose.connection;
            db.on('error', function() {
                return reject("Database connection error");
            });
            db.once('open', function() {
                return resolve("OK");
            });
        
        });
    })
}