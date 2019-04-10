var domain4 = require('../_models/domain4.models');
var domain4fail = require('../_models/domain4fail.models');
var shell = require('../_helpers/shell.commands');


module.exports.run_turkish_four_cvcv = async function () {
    let first_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let second_for = ["a", "e", "o", "u"];
    let third_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let fourth_for = ["a", "e", "o", "u"];
    let completed = 0;
    console.log("Total Variations:" + first_for.length * second_for.length * third_for.length * fourth_for.length);

    for (let i = 0; i < first_for.length; i++) {
        for (let j = 0; j < second_for.length; j++) {
            for (let k = 0; k < third_for.length; k++) {
                for (let l = 0; l < fourth_for.length; l++) {
                    var word = first_for[i] + "" + second_for[j] + "" + third_for[k] + "" + fourth_for[l] + ".com";
                    await shell.run_dig_command(word, completed).then(resp => {
                        if (resp != false) {
                            domain4.add_new_domain4(resp.count, resp.domain);
                        }
                    }).catch((domain) => {
                        domain4fail.add_new_domain4fail(completed, domain);
                    });
                    completed++;
                }
            }
        }
    }
}

module.exports.run_turkish_four_vcvc = async function () {
    let first_for = ["a", "e", "o", "u"];
    let second_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let third_for = ["a", "e", "o", "u"];
    let fourth_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let completed = 0;
    console.log("Total Variations:" + first_for.length * second_for.length * third_for.length * fourth_for.length);

    for (let i = 0; i < first_for.length; i++) {
        for (let j = 0; j < second_for.length; j++) {
            for (let k = 0; k < third_for.length; k++) {
                for (let l = 0; l < fourth_for.length; l++) {
                    var word = first_for[i] + "" + second_for[j] + "" + third_for[k] + "" + fourth_for[l] + ".com";
                    await shell.run_dig_command(word, completed).then(resp => {
                        if (resp != false) {
                            domain4.add_new_domain4(resp.count, resp.domain);
                        }
                    }).catch((domain) => {
                        domain4fail.add_new_domain4fail(completed, domain);
                    });
                    completed++;
                }
            }
        }
    }
}

module.exports.run_turkish_four_cvvc = async function () {
    let first_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let second_for = ["a", "e", "o", "u"];
    let third_for = ["a", "e", "o", "u"];
    let fourth_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let completed = 0;
    console.log("Total Variations:" + first_for.length * second_for.length * third_for.length * fourth_for.length);

    for (let i = 0; i < first_for.length; i++) {
        for (let j = 0; j < second_for.length; j++) {
            for (let k = 0; k < third_for.length; k++) {
                for (let l = 0; l < fourth_for.length; l++) {
                    var word = first_for[i] + "" + second_for[j] + "" + third_for[k] + "" + fourth_for[l] + ".com";
                    await shell.run_dig_command(word, completed).then(resp => {
                        if (resp != false) {
                            domain4.add_new_domain4(resp.count, resp.domain);
                        }
                    }).catch((domain) => {
                        domain4fail.add_new_domain4fail(completed, domain);
                    });
                    completed++;
                }
            }
        }
    }
}