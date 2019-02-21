let bash = require('/opt/git-lambda-layer');
exports.handler = function(event, context, callback) {
    
    callback(null, {"message": "Successfully executed"});
}