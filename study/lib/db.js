const mysql = require('mysql');  // mysql 모듈 로드

const db=mysql.createConnection({
    host     : 'localhost',
    user     : 'study',
    password : '0000',
    database : 'trip'
})

db.connect();

module.exports=db;