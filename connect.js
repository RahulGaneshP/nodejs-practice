const mysql = require('../crudapp/node_modules/mysql');
const mysqlLib = require('../crudapp/config.json');
var mysqlConnection = mysql.createConnection(mysqlLib);

mysqlConnection.connect((err)=>{
    if(err){
        console.log("Failed to Connect");
        console.log(err)
    }
    else{
        console.log("Connected Successfully");
    }

});
mysqlConnection.end();