/**
 * Created by sureshsc on 9/14/16.
 */
const ServerResponse = require('http').ServerResponse;

/*eslint-disable */
/**
 * General function to formate the success message and send to the user
 * @param res  ServerResponse object
 * @param successObject endpoint's expected data
 * @param message Any other addition message which to be shown
 */
/* eslint-enable */

const sendFormattedSuccess = (res,successObject,message) => {

    const response = {};

    // In future any change in this structure we can do

    response.success = true;
    response.message = message || "success";

    //Checking the typeof success object

    if (typeof successObject === 'object') {
        response.data = successObject;
    } else {
        response.data = {"response": successObject};
    }

    //If res is not the ServerResponse the throw error

    if (res && res instanceof ServerResponse) {
        res.status(200);
        res.send(response);
    } else {
        // Again programmer bug in argument
        /* eslint-disable */
        throw new TypeError('First parameter should be instance of http.ServerResponse');

    }
};
/* eslint-enable*/

module.exports = {sendFormattedSuccess};