const myArgs = process.argv.slice(2);
const fs = require("fs");
const winston = require('winston');
const logDir = 'logs';
const tsFormat = () => (new Date()).toLocaleTimeString();

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
/*eslint-enable */

module.exports = {
    "env": environmentVal,
    logging () {

        /**
         * LOGGING FUNCTION 
         * This will collect all the logs and store it in ./log/system.log
         * Create the log directory if it does not exist
        */
        
        /* eslint-disable */
        if (!fs.existsSync(`./${logDir}`)) {
            fs.mkdirSync(`./${logDir}`);
        }
        const logger = new winston.Logger({
            "transports": [
                new winston.transports.File({
                    "filename": `./${logDir}/system.log`,
                    //Stream: fs.createWriteStream(`../${logDir}/results.log`, {flags: 'a'}),
                    "timestamp": tsFormat,
                    //Level: env_node === 'development' ? 'debug' : 'info'
                    "json": true
                })
            ]
        });
        
        /* eslint-enable */
        /**End of Logging function */

        return logger;
    }
};