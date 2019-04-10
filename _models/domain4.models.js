var Domain4 = require('../_structures/domain4.structures');

exports.get_domain4_list = function () {
    return new Promise(function (resolve, reject) {
        Domain4.find({}, function (err, nes) {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(nes);
            }
        });
    });
}
exports.add_new_domain4 = function (count, domain) {
    return new Promise(function (resolve, reject) {
        let domain4 = new Domain4({ count, domain });
        domain4.save(function (err) {
            if (err) {
                return reject(err);
            }
            else {
                return resolve("Domain Added");
            }
        });
    });
}
