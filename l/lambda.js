let udith_layer = require('/opt/sample-lambda-layer');

exports.handler = function(event, context, callback) {
    console.log(udith_layer);
    callback(null, {"message": "Successfully executed"});
}