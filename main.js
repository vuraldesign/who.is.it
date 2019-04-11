var db = require('./_helpers/db.mongo');
var domain4 = require('./_actions/domain4.actions');
var domain5 = require('./_actions/domain5.actions');

async function search_start(){
    db.connect().then(() => {
        domain4.run_turkish_four_cvcv();
        //domain4.run_turkish_four_cvvc();
        //domain4.run_turkish_four_vccv();
        //domain4.run_turkish_four_vcvc();

        //domain5.run_turkish_five_cvcvc();
        //domain5.run_turkish_five_cvvcv();
        //domain5.run_turkish_five_vccvc();
        //domain5.run_turkish_five_vcvcv();
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