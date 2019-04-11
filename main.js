var db = require('./_helpers/db.mongo');
var domain4 = require('./_actions/domain4.actions');
var domain5 = require('./_actions/domain5.actions');

async function search_start(){
    db.connect(true).then(() => { //Local Mongo connect if u dont remote set false
        //domain4.run_turkish_four_cvcv();TO DO
        //domain4.run_turkish_four_cvvc();TO DO
        //domain4.run_turkish_four_vccv();TO DO
        //domain4.run_turkish_four_vcvc();TO DO

        //domain5.run_turkish_five_cvcvc();TO DO
        //domain5.run_turkish_five_cvvcv();TO DO
        //domain5.run_turkish_five_vccvc();TO DO
        domain5.run_turkish_five_vcvcv();
    }).catch((err) => {
        console.log("Project not start.");
        console.log("Please check your mongodb connection and mongo connection string in helpers/mongo.js");
        console.log("Error Detail:");
        console.log(err);
        console.log("Project Closed");
        process.exit(0x1);
    });
}

search_start();