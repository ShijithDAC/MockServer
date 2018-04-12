const myArgs = process.argv.slice(2);

let environmentVal = "";

switch (myArgs[0]) {
case "-dev":
    /* eslint-disable */
    require('dotenv').config({path:__dirname+"/../bin/development.env"});
    environmentVal = "dev";
    break;
case "-prod":
    require('dotenv').config({path:__dirname+"/../bin/production.env"});
    environmentVal = "prod";
    break;
default:
    console.log("default configuration");
    require('dotenv').config({path:__dirname+"/../bin/development.env"});
    environmentVal = "dev";
}

module.exports.env = environmentVal;