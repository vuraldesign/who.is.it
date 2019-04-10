var Domain4Fail = require('../_structures/domain4fail.structures');

exports.get_domain4fail_list = function () {
    return new Promise(function (resolve, reject) {
        Domain4Fail.find({}, function (err, nes) {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(nes);
            }
        });
    });
}
exports.add_new_domain4fail = function (count, domain) {
    return new Promise(function (resolve, reject) {
        let domain4fail = new Domain4Fail({ count, domain });
        domain4fail.save(function (err) {
            if (err) {
                return reject(err);
            }
            else {
                return resolve("Domain Added");
            }
        });
    });
}
