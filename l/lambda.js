exports.handler = function(event, context, callback) {

event.Records.forEach((record) => {
        console.log(record.eventID);
        console.log(record.eventName);
        console.log('DynamoDB Record: %j', record.dynamodb);
    });
    return `Successfully processed ${event.Records.length} records.`;
}