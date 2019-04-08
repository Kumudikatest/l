let AWS = require('aws-sdk')
const ddb = new AWS.DynamoDB.DocumentClient();
ddb.query({
    TableName: 'py_table'
}).promise()
    .then((data) => {
        //your logic goes here
        console.log(data);
    })
    .catch((err) => {
        //handle error
    });
