const { exec } = require('child_process');

module.exports.run_dig_command = async function(word, count) {
    return new Promise(async function (resolve, reject) {
        exec('dig ' + word + ' | grep -A1 \"ANSWER SECTION\\|AUTHORITY SECTION\\|PSEUDOSECTION\"', async function (err, stdout, stderr) {
            if (err) {
                return reject(word);
            } else {
                if (!stderr) {
                    if (stdout.indexOf("AUTHORITY SECTION") > -1 | stdout.indexOf("PSEUDOSECTION") > -1) {
                        await run_whois_command(word, count).then((resp) => {
                            return resolve(resp);
                        }).catch(() => {
                            return reject(word);
                        });
                    } else {
                        return resolve(false);
                    }
                } else {
                    return reject(word);
                }
            }
        });
    });
}
function run_whois_command(word, count) {
    return new Promise(function (resolve, reject) {
        exec('whois ' + word + ' | grep -A1 \"Domain Name\\|No match for domain\"', (err, stdout, stderr) => {
            if (err) {
                return reject(word);
            } else {
                if (!stderr) {
                    if (stdout.indexOf("No match for domain") > -1) {
                        return resolve({
                            "count": count,
                            "domain": word
                        });
                    } else {
                        return resolve(false);
                    }
                } else {
                    return reject(word);
                }
            }
        });
    });
}