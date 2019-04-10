var Domain5Fail = require('../_structures/domain5fail.structures');

exports.get_domain5fail_list = function () {
    return new Promise(function (resolve, reject) {
        Domain5Fail.find({}, function (err, nes) {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(nes);
            }
        });
    });
}
exports.add_new_domain5fail = function (count, domain) {
    return new Promise(function (resolve, reject) {
        let domain5fail = new Domain5Fail({ count, domain });
        domain5fail.save(function (err) {
            if (err) {
                return reject(err);
            }
            else {
                return resolve("Domain Added");
            }
        });
    });
}
