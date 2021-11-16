var mysql = require('../crudapp/node_modules/mysql');  
var pool = mysql.createPool({  
connectionLimit : 10,
host: "localhost",  
user: "root",  
password: "pass1234",  
database: "emp_directory"  
});  
var sql = 'INSERT INTO employee (firstname,lastname,email,phno,designation,salary) VALUES ?';  
const text = [{"firstname": "bro","lastname": "s","email": "bro@frsh.com","phno": 97908,"designation": "GT","salary": "40000"},{"firstname": "sharon","lastname": "LU","email": "sharon@frsh.com","phno": 9790,"designation": "GT","salary":"40000"}];
var valarr=[];
    for(var i in text){
        var obj = (Object.values(text[i]));
        valarr.push(obj)
    }
pool.query(sql, [valarr], function (err, result) {  
if (err) throw err;  
console.log("MySQL Multiple Record Inserted");  
console.log("No. of records inserted- " + result.affectedRows);  
});  
