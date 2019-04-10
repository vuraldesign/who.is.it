var Domain5 = require('../_structures/domain5.structures');

exports.get_domain5_list = function () {
    return new Promise(function (resolve, reject) {
        Domain5.find({}, function (err, nes) {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(nes);
            }
        });
    });
}
exports.add_new_domain5 = function (count, domain) {
    return new Promise(function (resolve, reject) {
        let domain5 = new Domain5({ count, domain });
        domain5.save(function (err) {
            if (err) {
                return reject(err);
            }
            else {
                return resolve("Domain Added");
            }
        });
    });
}
