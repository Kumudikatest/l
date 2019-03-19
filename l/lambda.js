const mysql = require('mysql');

exports.handler = function(event, context, callback) {
   
    var connection = mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        port: process.env.port,
        database: process.env.database
    });
    
    connection.connect();

    connection.query('SELECT * FROM family LIMIT 5', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        callback(null, { results });
    });

    connection.end();

    callback(null, {"message": "Successfully executed"});
}