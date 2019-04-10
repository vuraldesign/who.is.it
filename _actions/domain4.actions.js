var domain4 = require('../_models/domain4.models');
var shell = require('../_helpers/shell.commands');
var domain4 = require('../_models/domain4.models');


module.exports.run_turkish_four_cvcv = async function () {
    let first_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let second_for = ["a", "e", "o", "u"];
    let third_for = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "z"];
    let four_for = ["a", "e", "o", "u"];
    let completed = 0;
    console.log("Total Variations:" + first_for.length * second_for.length * third_for.length * four_for.length);

    for (let i = 0; i < first_for.length; i++) {
        for (let j = 0; j < second_for.length; j++) {
            for (let k = 0; k < third_for.length; k++) {
                for (let l = 0; l < four_for.length; l++) {
                    var word = sessiz[i] + "" + sesli[j] + "" + sessiz[k] + "" + sesli[l] + "" + sessiz[m] + ".com";
                    await shell.run_dig_command(word, completed).then(resp => {
                        if(resp != false){
                            domain4.add_new_domain4(resp.count, resp.domain);
                        }
                    }).catch((domain) => {
                        //ADD FAIL domain with count
                    });
                    completed++;
                }
            }
        }
    }

}