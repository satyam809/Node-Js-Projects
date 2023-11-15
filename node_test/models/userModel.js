const conn = require('../dbConfig');

exports.insert = async (data) => {
    //console.log(data);
    return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO users set ?`, data, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                resolve(result);
            }
        });
    })
}