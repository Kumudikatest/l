let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
let SL_TWITTER = require('slappforge-sdk-twitter');
let twitterClients = require('./TwitterClients');
const twitter = new SL_TWITTER.TwitterP(twitterClients);

exports.handler = function (event, context, callback) {

    twitter.postTweet({
        "status": "Test",
        "clientName": "twClient"
    }).then(response => {
        let data = response.data;
    }).catch(err => {
        console.log(err);
        cognito_idp.listUsers({
            UserPoolId: "us-east-1_D10y3fy0o",
            Limit: "10"
        }, function (error, data) {
            if (error) {
                // implement error handling logic here
                throw error;
            }
            // your logic goes within this block
        });
    });

    callback(null, { "message": "Successfully executed" });
}