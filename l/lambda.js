let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = function (event, context, callback) {

    // You can pass the existing connection to this function.
    // A new connection will be created if it's not present as the third param 
    // You must always end/destroy the DB connection after it's used
                // You must always end/destroy the DB connection after it's used
                rds.beginTransaction({
                    instanceIdentifier: 'k'
                },function (error,connection) {
                    if (error) {
                        throw error;
                    }

                    connection.end();
                });

    callback(null, { "message": "Successfully executed" });
}