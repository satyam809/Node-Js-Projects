const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});
conn.connect((err) =>{
    if(err){
        console.log(err);
    }else{
        console.log('connection established');
    }
})

module.exports = conn;