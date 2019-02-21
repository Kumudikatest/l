let udith_layer = require('/opt/sample-lambda-layer');

exports.handler = function(event, context, callback) {
    
    callback(null, {"message": "Successfully executed"});
}