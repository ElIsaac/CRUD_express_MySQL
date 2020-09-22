const mysql      = require('mysql');
var coneccionMySql = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'express'
});
 
coneccionMySql.connect(err=>{
        if(err){
            console.log(err.sqlMessage)
        }else{
            console.log("bd is 0ok")
        }
    })






module.exports = coneccionMySql;