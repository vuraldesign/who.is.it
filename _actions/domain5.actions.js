var domain5 = require('../_models/domain5.models');
var domain5fail = require('../_models/domain5fail.models');
var shell = require('../_helpers/shell.commands');


module.exports.run_turkish_five_cvcvc = async function () {
    let first_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let second_for = ["a", "e", "o", "u"];
    let third_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let fourth_for = ["a", "e", "o", "u"];
    let fifth_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let completed = 0;
    console.log("Total Variations:" + first_for.length * second_for.length * third_for.length * fourth_for.length * fifth_for.length);

    for (let i = 0; i < first_for.length; i++) {
        for (let j = 0; j < second_for.length; j++) {
            for (let k = 0; k < third_for.length; k++) {
                for (let l = 0; l < fourth_for.length; l++) {
                    for (let m = 0; m < fifth_for.length; m++) {
                        var word = first_for[i] + "" + second_for[j] + "" + third_for[k] + "" + fourth_for[l] + "" + fifth_for[m] + ".com";
                        await shell.run_dig_command(word, completed).then(resp => {
                            if (resp != false) {
                                domain5.add_new_domain5(resp.count, resp.domain);
                            }
                        }).catch((domain) => {
                            domain5fail.add_new_domain5fail(completed, domain);
                        });
                        completed++;
                        if(completed == first_for.length * second_for.length * third_for.length * fourth_for.length * fifth_for.length){
                            console.log("Detection completed")
                        }
                    }
                }
            }
        }
    }
}

module.exports.run_turkish_five_vcvcv = async function () {
    let first_for = ["a", "e", "o", "u"];
    let second_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let third_for = ["a", "e", "o", "u"];
    let fourth_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let fifth_for = ["a", "e", "o", "u"];
    let completed = 0;
    console.log("Total Variations:" + first_for.length * second_for.length * third_for.length * fourth_for.length * fifth_for.length);

    for (let i = 0; i < first_for.length; i++) {
        for (let j = 0; j < second_for.length; j++) {
            for (let k = 0; k < third_for.length; k++) {
                for (let l = 0; l < fourth_for.length; l++) {
                    for (let m = 0; m < fifth_for.length; m++) {
                        var word = first_for[i] + "" + second_for[j] + "" + third_for[k] + "" + fourth_for[l] + "" + fifth_for[m] + ".com";
                        await shell.run_dig_command(word, completed).then(resp => {
                            if (resp != false) {
                                domain5.add_new_domain5(resp.count, resp.domain);
                            }
                        }).catch((domain) => {
                            domain5fail.add_new_domain5fail(completed, domain);
                        });
                        completed++;
                        if(completed == first_for.length * second_for.length * third_for.length * fourth_for.length * fifth_for.length){
                            console.log("Detection completed")
                        }
                    }
                }
            }
        }
    }
}

module.exports.run_turkish_five_cvvcv = async function () {
    let first_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let second_for = ["a", "e", "o", "u"];
    let third_for = ["a", "e", "o", "u"];
    let fourth_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let fifth_for = ["a", "e", "o", "u"];
    let completed = 0;
    console.log("Total Variations:" + first_for.length * second_for.length * third_for.length * fourth_for.length * fifth_for.length);

    for (let i = 0; i < first_for.length; i++) {
        for (let j = 0; j < second_for.length; j++) {
            for (let k = 0; k < third_for.length; k++) {
                for (let l = 0; l < fourth_for.length; l++) {
                    for (let m = 0; m < fifth_for.length; m++) {
                        var word = first_for[i] + "" + second_for[j] + "" + third_for[k] + "" + fourth_for[l] + "" + fifth_for[m] + ".com";
                        await shell.run_dig_command(word, completed).then(resp => {
                            if (resp != false) {
                                domain5.add_new_domain5(resp.count, resp.domain);
                            }
                        }).catch((domain) => {
                            domain5fail.add_new_domain5fail(completed, domain);
                        });
                        completed++;
                        if(completed == first_for.length * second_for.length * third_for.length * fourth_for.length * fifth_for.length){
                            console.log("Detection completed")
                        }
                    }
                }
            }
        }
    }
}
module.exports.run_turkish_five_vccvc = async function () {
    let first_for = ["a", "e", "o", "u"];
    let second_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let third_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let fourth_for = ["a", "e", "o", "u"];
    let fifth_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let completed = 0;
    console.log("Total Variations:" + first_for.length * second_for.length * third_for.length * fourth_for.length * fifth_for.length);

    for (let i = 0; i < first_for.length; i++) {
        for (let j = 0; j < second_for.length; j++) {
            for (let k = 0; k < third_for.length; k++) {
                for (let l = 0; l < fourth_for.length; l++) {
                    for (let m = 0; m < fifth_for.length; m++) {
                        var word = first_for[i] + "" + second_for[j] + "" + third_for[k] + "" + fourth_for[l] + "" + fifth_for[m] + ".com";
                        await shell.run_dig_command(word, completed).then(resp => {
                            if (resp != false) {
                                domain5.add_new_domain5(resp.count, resp.domain);
                            }
                        }).catch((domain) => {
                            domain5fail.add_new_domain5fail(completed, domain);
                        });
                        completed++;
                        if(completed == first_for.length * second_for.length * third_for.length * fourth_for.length * fifth_for.length){
                            console.log("Detection completed")
                        }
                    }
                }
            }
        }
    }
}