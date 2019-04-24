let AWS = require('aws-sdk')
const ddb = new AWS.DynamoDB.DocumentClient();

    ddb.scan({
        TableName: 'py_table'
    }).promise()
        .then((data) => {
            //your logic goes here
        })
        .catch((err) => {
            //handle error
        });

    callback(null, { "message": "Successfully executed" });
